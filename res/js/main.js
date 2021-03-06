window.onkeydown = function(evt) {
	evt = evt || window.event;
	if (evt.keyCode == 13) {
		document.getElementsByClassName("titre-card-resultat")[0].classList.add("activeCalc");
		calculate();
		setTimeout(function () {document.getElementsByClassName("titre-card-resultat")[0].classList.remove("activeCalc")}, 100);
	}
}

window.onload = function() {
	elem_inputs.refresh();
	capa_toggle(elem_inputs.atq_type);
	def_toggle();
	var cookie = readCookie("style");
  var title = cookie ? cookie : getPreferredStyleSheet();
  setActiveStyleSheet(title);

	elem_inputs.pv_max["old_value"] = elem_inputs.pv_max.valueAsNumber;

	elem_inputs.pv_max.onchange = function() {
		capage(this, 100)
		if (this.old_value > this.valueAsNumber) {
			elem_inputs.pv_reste.valueAsNumber = this.valueAsNumber;
		} else if (this.old_value < this.value) {
			elem_inputs.pv_reste.valueAsNumber = this.valueAsNumber;
		}
		this.old_value = this.valueAsNumber;

	}

	elem_inputs.pv_reste.onchange = function() {
		this.max = elem_inputs.pv_max.valueAsNumber;
		if (this.valueAsNumber >= elem_inputs.pv_max.valueAsNumber) {
			this.valueAsNumber = elem_inputs.pv_max.valueAsNumber;
		}
		if (this.valueAsNumber <= 0) {
			this.valueAsNumber = 0;
		}
		if (isNaN(this.valueAsNumber)) {
			this.valueAsNumber = elem_inputs.pv_max.valueAsNumber;
		}
	}

	elem_inputs.pv_max.onchange();
	elem_inputs.pv_reste.onchange();

	elem_inputs.des_atq.onchange = function() {
		capage(this, 0, 10);
	}
	elem_inputs.des_atq.onchange();

	elem_inputs.des_def.onchange = function() {
		capage(this, 0, 10);
	}
	elem_inputs.des_def.onchange();

	elem_inputs.bouclier.onchange = function() {
		capage(this, 0, 100);
	}
	elem_inputs.bouclier.onchange();

	if (localStorage.logs) {
		logs = JSON.parse(localStorage.getItem("logs"));
		logs = logs.map(elem => Object.assign(new LogObject(), elem));
		logs.forEach(elem => elem.date = Object.assign(new Date(), elem.date));
		logs.forEach(elem => elem_inputs.log_box.innerHTML = elem.toHtml() + "<hr>" + elem_inputs.log_box.innerHTML);
	}
}

function capa_arme_toggle(elem) {
	if (parseInt(elem.value) == 0 || parseInt(elem.value) == 1 || parseInt(elem.value) == 3){
		elem_inputs.arme.disabled = true;
		elem_inputs.arme.value = 9;
		bonus_toggle()
		if (elem_inputs.dist_atq.value == 1){
			elem_inputs.dist_atq.checked = false;
			elem_inputs.dist_atq = document.getElementsByName("dist_atq")[0];
			}
		elem_inputs.dist_atq.checked = true;
		document.getElementsByName("dist_atq").forEach( elem => {elem.disabled = true})
	} else {
		elem_inputs.arme.disabled = false;
		elem_inputs.arme.value = 0;
		bonus_toggle();
	}
}

function capa_toggle(elem) {
	if (parseInt(elem.value)) {
		elem_inputs.capacite_type.disabled = false;
		elem_inputs.arme.disabled = true;
		capa_arme_toggle(document.getElementById("capacite_type"));
	} else {
		elem_inputs.capacite_type.disabled = true;
		elem_inputs.arme.disabled = false;
		elem_inputs.arme.value = 0;
		bonus_toggle();
	}

}

function bonus_toggle() {
	if (elem_inputs.arme.value == 0) {
		elem_inputs.bonus.disabled = true;
		elem_inputs.bonus.value = '';
		if (elem_inputs.dist_atq.value == 1){
			elem_inputs.dist_atq.checked = false;
			elem_inputs.dist_atq = document.getElementsByName("dist_atq")[0];
			}
		elem_inputs.dist_atq.checked = true;
		document.getElementsByName("dist_atq").forEach( elem => {elem.disabled = true})
	} else {
		elem_inputs.bonus.disabled = false;
		elem_inputs.bonus.value = 0;
		elem_inputs.bonus.onchange = function() {
			capage(this, 0, 100);
		}
		if ((elem_inputs.arme.value == 2) || (elem_inputs.arme.value == 8)) {
			if (elem_inputs.dist_atq.value == 0){
				elem_inputs.dist_atq.checked = false;
				elem_inputs.dist_atq = document.getElementsByName("dist_atq")[1];
			}
 			elem_inputs.dist_atq.checked = true;
			document.getElementsByName("dist_atq").forEach( elem => {elem.disabled = false})
			}
		else if ((elem_inputs.arme.value == 4)||(elem_inputs.arme.value == 5)||(elem_inputs.arme.value == 6) || (elem_inputs.arme.value == 1)) {
			if (elem_inputs.dist_atq.value == 1){
				elem_inputs.dist_atq.checked = false;
				elem_inputs.dist_atq = document.getElementsByName("dist_atq")[0];
				}
				elem_inputs.dist_atq.checked = true;
				document.getElementsByName("dist_atq").forEach( elem => {elem.disabled = true})
		 	}
		else {
			if (elem_inputs.dist_atq.value == 1){
				elem_inputs.dist_atq.checked = false;
				elem_inputs.dist_atq = document.getElementsByName("dist_atq")[0];
			}
			elem_inputs.dist_atq.checked = true;
			document.getElementsByName("dist_atq").forEach( elem => {elem.disabled = false})
			}
		elem_inputs.bonus.onchange();
	}
}

function def_toggle() {
	elem_inputs.refresh();
	if (elem_inputs.des_esquive.value == 0) {
		elem_inputs.agi.value = '';
		elem_inputs.endurance.value = 0;
		elem_inputs.agi.disabled = true;
		elem_inputs.endurance.disabled = false;
		elem_inputs.endurance.onchange = function() {
			capage(this, 0, 10)
		}
		elem_inputs.endurance.onchange();
	} else {
		elem_inputs.endurance.value = '';
		elem_inputs.agi.value = 0;
		elem_inputs.agi.disabled = false;
		elem_inputs.endurance.disabled = true;
		elem_inputs.agi.onchange = function() {
			capage(this, 0, 10)
		}
		elem_inputs.agi.onchange();
	}
}

function formatNumber(num) {
	if (num < 10) {
		return "0" + num.toString();
	}
	return num.toString();
}

function formatDate(date) {
	return "aaaa-mm-jj-HHhMM".replace("jj", this.formatNumber(date.getDate())).replace("mm", this.formatNumber(date.getMonth() + 1))
		.replace("aaaa", this.formatNumber(date.getFullYear())).replace("HH", this.formatNumber(date.getHours()))
		.replace("MM", this.formatNumber(date.getMinutes()));
}

function downloadLogs() {
	if (!logs.length) {
		alert("Log vide");
		return;
	}
	var a = document.createElement('a')
	var moment = new Date();
	moment = "Log du " + formatDate(moment);
	a.download = moment;
	a.href = "data:text/plain;charset=utf-8," + encodeURIComponent(logs.reduce(concatLogs));
	a.style.display = "none";

	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a)

}

function log_ecriture() {
	var log = createLogFromActualInput();
	logs[logs.length] = log;
	localStorage.setItem("logs", JSON.stringify(logs));
	elem_inputs.log_box.innerHTML = log.toHtml() + "<hr>" + elem_inputs.log_box.innerHTML;
}

function clearLog() {
	elem_inputs.log_box.innerHTML = '';
	logs = [];
	localStorage.removeItem("logs");
}

function clearInput() {
	elem_inputs.resetInputs();
	elem_inputs.resetAllRadio();
	def_toggle();
	capa_toggle(elem_inputs.atq_type);
	elem_inputs.res_pv.innerHTML = '░'
	elem_inputs.res_deg.innerHTML = '░'
}

function test_none(t) {
	lg = t.trim();
	if (((!t) || (lg.length == 0))) {
		return true;
	}
	return false;
}

function capage(elem, min = NaN, max = NaN) {
	if (max != NaN) {
		if (elem.valueAsNumber > max) {
			elem.value = max;
		}
	}
	if (min != NaN) {
		if (elem.valueAsNumber <= min) {
			elem.value = min;
		}
	}
	if (isNaN(elem.valueAsNumber) || test_none(elem.value)) {
		elem.value = min;
	}
}

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else expires = "";
  document.cookie = name+"="+value+expires+"; path=/; SameSite=Lax";
}

function setActiveStyleSheet(title) {
  var i, a, main;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
      a.disabled = true;
      if(a.getAttribute("title") == title) a.disabled = false;
    }
  }
}

function getActiveStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
  }
  return null;
}

function getPreferredStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1
       && a.getAttribute("rel").indexOf("alt") == -1
       && a.getAttribute("title")
       ) return a.getAttribute("title");
  }
  return null;
}

function toggletheme(){
	var theme=getActiveStyleSheet();
	if (theme=="dark"){
		document.getElementById('theme').click=setActiveStyleSheet ('light');
		return false;
	}
	else if (theme=="light") {
		document.getElementById('theme').click=setActiveStyleSheet ('dark');
		return false;
	}
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

window.onunload = function(e) {
  var title = getActiveStyleSheet();
  createCookie("style", title, 365);
}


var cookie = readCookie("style");
var title = cookie ? cookie : getPreferredStyleSheet();
setActiveStyleSheet(title);