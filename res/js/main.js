window.onkeydown = function(evt){
  evt = evt || window.event;
  if(evt.keyCode == 13){
    calculate()
  }
}

window.onload = function() {
  elem_inputs.refresh();
  capa_toggle(elem_inputs.atq_type);
  elem_inputs.pv_max["old_value"] = elem_inputs.pv_max.valueAsNumber;

  elem_inputs.pv_max.onchange = function() {

        if(this.old_value > this.valueAsNumber){
          elem_inputs.pv_reste.valueAsNumber -= this.old_value - this.valueAsNumber;
        }else if(this.old_value < this.value){
          elem_inputs.pv_reste.valueAsNumber += this.valueAsNumber - this.old_value;
        }
        capage(this, 0)
        this.old_value = this.valueAsNumber;
        elem_inputs.pv_reste.onchange();
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
}

  function capa_toggle(elem){
    if(parseInt(elem.value)){
      elem_inputs.capacite_type.disabled = false;
    }else{
      elem_inputs.capacite_type.disabled = true;
    }
  }

  function log_ecriture(){
    var log = createLogFromActualInput();
    elem_inputs.log_box.innerHTML = log.toHtml()+"<hr>"+elem_inputs.log_box.innerHTML;
  } //A faire plus tard quand le cadre aura été fait, partie 2 du programme
  //s'efface quand on actualise !

function clearLog(){}

  function clearInput(){
    elem_inputs.pv_max.value=100;
    elem_inputs.pv_reste.value=100;
    elem_inputs.bouclier.value=0;
    elem_inputs.endurance.value=0;
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
    if ((int_bonus >100)||(int_bonus<0)){
      elem_inputs.bonus.onchange=function(){capage(this, 0, 100)}
    }
    if ((int_shield >100)||(int_shield<0)){
      elem_inputs.bouclier.onchange=function(){capage(this, 0, 100)}
    }
  }
