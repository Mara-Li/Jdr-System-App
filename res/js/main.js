window.onkeydown = function(evt){
  evt = evt || window.event;
  if(evt.keyCode == 13){
    calculate()
  }
}

window.onload = function() {
  elem_inputs.refresh();
  capa_toggle(elem_inputs.atq_type);
  elem_inputs.arme.onchange=bonus_toggle;
  elem_inputs.arme.onchange();

  elem_inputs.pv_max["old_value"] = elem_inputs.pv_max.valueAsNumber;

  elem_inputs.pv_max.onchange = function() {

    if(this.old_value > this.valueAsNumber){
      elem_inputs.pv_reste.valueAsNumber = this.valueAsNumber;
    }else if(this.old_value < this.value){
      elem_inputs.pv_reste.valueAsNumber = this.valueAsNumber;
    }
    capage(this, 0)
    this.old_value = this.valueAsNumber;

  }

  elem_inputs.pv_reste.onchange = function() {
    this.max = elem_inputs.pv_max.valueAsNumber;
    if(this.valueAsNumber >= elem_inputs.pv_max.valueAsNumber){
      this.valueAsNumber = elem_inputs.pv_max.valueAsNumber;
    }
    if(this.valueAsNumber <= 0){
      this.valueAsNumber = 0;
    }
    if(isNaN(this.valueAsNumber)){
      this.valueAsNumber = elem_inputs.pv_max.valueAsNumber;
    }
  }
  elem_inputs.pv_max.onchange();
  elem_inputs.pv_reste.onchange();

  if(localStorage.logs){
    logs = JSON.parse(localStorage.getItem("logs"));
    logs = logs.map(elem => Object.assign(new LogObject(), elem));
    logs.forEach(elem => elem.date = Object.assign(new Date(), elem.date));
    logs.forEach(elem => elem_inputs.log_box.innerHTML = elem.toHtml()+"<hr>"+elem_inputs.log_box.innerHTML);
  }
}

function capa_arme_toggle(elem){
  if (parseInt(elem.value)==0||parseInt(elem.value)==1){
    elem_inputs.arme.disabled = true;
    elem_inputs.arme.value=9;
    bonus_toggle()
  }else{
    elem_inputs.arme.disabled = false;
    elem_inputs.arme.value=0;
    bonus_toggle();
  }
}

function capa_toggle(elem){
  if(parseInt(elem.value)){
    elem_inputs.capacite_type.disabled = false;
    elem_inputs.arme.disabled = true;
    capa_arme_toggle(document.getElementById("capacite_type"));
 }else{
    elem_inputs.capacite_type.disabled = true;
    elem_inputs.arme.disabled = false;
    elem_inputs.arme.value=0;
    bonus_toggle();
  }
}

function bonus_toggle(){
  if (elem_inputs.arme.value==0){
    elem_inputs.bonus.disabled=true;
    elem_inputs.bonus.value='';
  }
  else {
    elem_inputs.bonus.disabled=false;
    elem_inputs.bonus.value=0;
  }
}

function formatNumber(num){
    if(num < 10){
        return "0" + num.toString();
    }return num.toString();
}

function formatDate(date){
    return "aaaa-mm-jj-HHhMM".replace("jj", this.formatNumber(date.getDate())).replace("mm", this.formatNumber(date.getMonth()+1))
    .replace("aaaa", this.formatNumber(date.getFullYear())).replace("HH", this.formatNumber(date.getHours()))
    .replace("MM", this.formatNumber(date.getMinutes()));
}

function downloadLogs(){
  if(!logs.length){
    alert("Log vide");
    return;
  }
  var a    = document.createElement('a')
  var moment=new Date();
  moment="Log du "+formatDate(moment);
  a.download = moment;
  a.href = "data:text/plain;charset=utf-8," + encodeURIComponent(logs.reduce(concatLogs));
  a.style.display = "none";

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a)

}

function log_ecriture(){
  var log = createLogFromActualInput();
  logs[logs.length] = log;
  localStorage.setItem("logs", JSON.stringify(logs));
  elem_inputs.log_box.innerHTML = log.toHtml()+"<hr>"+elem_inputs.log_box.innerHTML;
} //A faire plus tard quand le cadre aura été fait, partie 2 du programme
//s'efface quand on actualise !

function clearLog(){
  elem_inputs.log_box.innerHTML = '';
  logs = [];
  localStorage.removeItem("logs");
}

function clearInput(){
  elem_inputs.pv_max.value=100;
  elem_inputs.pv_reste.value=100;
  elem_inputs.bouclier.value=0;
  elem_inputs.endurance.value=0;
	elem_inputs.agi.value=0;
  elem_inputs.des_atq.value=0;
  elem_inputs.des_def.value=0;
  elem_inputs.arme.value=0;
  elem_inputs.bonus.value=0;
  elem_inputs.capacite_type.value=0;
  elem_inputs.des_bonus_def.value=0;
  elem_inputs.res_deg.value=0;
  elem_inputs.res_pv.value=0;
  elem_inputs.des_bonus_def.checked=0;
  elem_inputs.atq_type.checked=1;
  elem_inputs.capacite_type.checked=1;
  elem_inputs.dist_atq.checked=1;
  elem_inputs.des_esquive.checked=1;
  elem_inputs.res_deg.innerHTML = '░';
  elem_inputs.res_pv.innerHTML ='░';
  capa_toggle(elem_inputs.atq_type);
  elem_inputs.arme.onchange=bonus_toggle;
  elem_inputs.arme.onchange();

} //Ajouter un bouton d'effacer tous les champs mais NE DOIT PAS EFFACER LES LOGS

function test_none(t){
  lg=t.trim();
  if (((! t) || (lg.length == 0))) {
    return true;
  }
  return false;
}


function capage(elem, min=NaN, max=NaN){
  if(max != NaN){
    if(elem.valueAsNumber > max){
      elem.value = max;
    }
  }
  if(min != NaN){
    if(elem.valueAsNumber <= min){
      elem.value = min;
    }
  }
  if(isNaN(elem.valueAsNumber) || test_none(elem.value)){
    elem.value = min;
  }
}

function capage_change(){
  var int_pv_max=parseInt(elem_inputs.pv_max.value);
  var int_atq=parseInt(elem_inputs.des_atq.value);
  var int_shield=parseInt(elem_inputs.bouclier.value);
  var int_dice_endu=parseInt(elem_inputs.endurance.value);
	var int_dice_agi=parseInt(elem_inputs.agi.value);
  var int_pv_restant=parseInt(elem_inputs.pv_reste.valu);
  var int_bonus=parseInt(elem_inputs.bonus.value);
  var int_defense=parseInt(elem_inputs.des_def.value);

  if ((int_atq>10) || (int_atq<0)){
    elem_inputs.des_atq.onchange=function(){capage(this, 0, 10)}
  }
  if ((int_defense >10)||(int_defense<0)){
    elem_inputs.des_def.onchange=function(){capage(this, 0, 10)}
  }
  if ((int_dice_endu >10)||(int_dice_endu<0)) {
    elem_inputs.endurance.onchange=function(){capage(this, 0, 10)}
  }
	if ((int_dice_agi >10)||(int_dice_agi<0)) {
		elem_inputs.endurance.onchange=function(){capage(this, 0, 10)}
	}
  if ((int_bonus >100)||(int_bonus<0)){
    elem_inputs.bonus.onchange=function(){capage(this, 0, 100)}
  }
  if ((int_shield >100)||(int_shield<0)){
    elem_inputs.bouclier.onchange=function(){capage(this, 0, 100)}
  }
}
