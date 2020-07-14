/*Valeurs des boutons radio et selections:
 *
 *  des_esquive -> 0 pour Endurance, 1 pour esquive raté
 *
 *  arme -> 0 pour aucun, 1 pour pouvoir, 2 fusil, 3 projectile, 4 épée,
 *          5 contondant, 6 couteau, 7 pistolet, 8 Canon, 9 autre
 *
 *  atq_type -> 0 pour atq normale, 1 pour capacité
 *
 *  capacite_type -> 0 pour Burst, 1 perforant, 2 autre
 *
 *  dist_atq -> 0 pour cac, 1 distance
 */

const elemIDs = [
	["pv_max", 100],
	["pv_reste", 100],
	["bouclier", 0],
	["endurance", 0],
	["agi", ''],
	["des_atq", 0],
	["des_def", 0],
	["arme", 0],
	["bonus", ''],
	["capacite_type", 0],
	["des_bonus_def", null],
	["res_deg", null],
	["res_pv", null],
	["log_box", null]
];

const radioGroupsName = [
	"des_esquive",
	"atq_type",
	"dist_atq"
]

class Elements_getter {
	constructor(lstID, lstRadio) {
		this._idLst = lstID;
		this._radioLst = lstRadio;
		this.refresh();
	}

	resetInputs() {
		this._idLst.forEach(pair => {
			if (pair[1] != null) {
				this[pair[0]].value = pair[1];
			}
		})
	}

	resetAllRadio() {
		this._radioLst.forEach(name => {
			var radioButtons = document.getElementsByName(name);
			for (var i = 0; i < radioButtons.length; i++) {
				radioButtons[i].checked = (i == 0 ? true : false);
			}
		});
	}

	getValueFromRadio(group_name) {
		var lst_radio = document.getElementsByName(group_name)
		for (var i = 0; i < lst_radio.length; i++) {
			if (lst_radio[i].checked) {
				return lst_radio[i];
			};
		};
		return undefined;
	}

	refresh() {
		this._idLst.forEach(pair => {
			this[pair[0]] = document.getElementById(pair[0]);
		});
		this._radioLst.forEach(name => {
			this[name] = this.getValueFromRadio(name);
		});
		return this;
	}
}

class LogObject {
	constructor(pv_max, bouclier, endurance, agi, arme, bonus, atq_type, capa_type, dist, des_atq, des_def, des_bonus_def, des_esquive, res_deg, pv_reste, date) {
		this.pv_max = parseInt(pv_max);
		this.bouclier = parseInt(bouclier);
		this.endurance = parseInt(endurance);
		this.agi = parseInt(agi);
		this.bonus = arme;
		this.val_bonus = parseInt(bonus);
		this.atq_type = parseInt(atq_type);
		this.capa_type = capa_type;
		this.dist = parseInt(dist);
		this.des_atq = parseInt(des_atq);
		this.des_def = parseInt(des_def);
		this.des_bonus_def = des_bonus_def;
		this.des_esquive = parseInt(des_esquive);
		this.res_deg = parseInt(res_deg);
		this.pv_reste = parseInt(pv_reste);
		this.date = Object.assign(new Date(), date);
	}

	formatDate(date) {
		return "jj/mm/aaaa à HH:MM".replace("jj", this.formatNumber(date.getDate())).replace("mm", this.formatNumber(date.getMonth() + 1))
			.replace("aaaa", this.formatNumber(date.getFullYear())).replace("HH", this.formatNumber(date.getHours()))
			.replace("MM", this.formatNumber(date.getMinutes()));
	}

	formatNumber(num) {
		if (num < 10) {
			return "0" + num.toString();
		}
		return num.toString();
	}

	defToStr() {
		if (isNaN (this.endurance)) {
			var res =
				"**Défenseur :**\n" +
				"- *PV max :* {pv_max}\n" +
				"- *Bouclier :* {bouclier}\n" +
				"- *Agilité :* {agi}\n";
			return res.replace("{pv_max}", this.pv_max)
				.replace("{bouclier}", this.bouclier)
				.replace("{agi}", this.agi);
		}
		else if (isNaN (this.agi)) {
			var res =
				"**Défenseur :**\n" +
				"- *PV max :* {pv_max}\n" +
				"- *Bouclier :* {bouclier}\n" +
				"- *Endurance :* {endurance}\n";
			return res.replace("{pv_max}", this.pv_max)
				.replace("{bouclier}", this.bouclier)
				.replace("{endurance}", this.endurance)
		}
		else {
			var res =
				"**Défenseur :**\n" +
				"- *PV max :* {pv_max}\n" +
				"- *Bouclier :* {bouclier}\n" +
				"- *Endurance :* {endurance}\n";
				"- *Agilité :* {agi}\n";
			return res.replace("{pv_max}", this.pv_max)
				.replace("{bouclier}", this.bouclier)
				.replace("{endurance}", this.endurance)
				.replace("{agi}", this.agi);
		}
	}

	defToHtml() {
		if (isNaN (this.endurance)) {
			var res =
				"<span class=\"log-title\"><b>Défenseur :</b></span>\n" +
				"<ul>\n" +
				" <li><i>PV max :</i> {pv_max}</li>\n" +
				" <li><i>Bouclier :</i> {bouclier}</li>\n" +
				" <li><i> Agilité : </i> {agi}</li>\n" +

				"</ul>\n";
			return res.replace("{pv_max}", this.pv_max)
				.replace("{bouclier}", this.bouclier)
				.replace("{agi}", this.agi)
		}
		else if (this.endurance == null) {
			var res =
				"<span class=\"log-title\"><b>Défenseur :</b></span>\n" +
				"<ul>\n" +
				" <li><i>PV max :</i> {pv_max}</li>\n" +
				" <li><i>Bouclier :</i> {bouclier}</li>\n" +
				" <li><i> Agilité : </i> {agi}</li>\n" +

				"</ul>\n";
			return res.replace("{pv_max}", this.pv_max)
				.replace("{bouclier}", this.bouclier)
				.replace("{agi}", this.agi)
		}
		else if (isNaN (this.agi)) {
			var res =
				"<span class=\"log-title\"><b>Défenseur :</b></span>\n" +
				"<ul>\n" +
				" <li><i>PV max :</i> {pv_max}</li>\n" +
				" <li><i>Bouclier :</i> {bouclier}</li>\n" +
				" <li><i>Endurance :</i> {endurance}</li>\n" +

				"</ul>\n";
			return res.replace("{pv_max}", this.pv_max)
				.replace("{bouclier}", this.bouclier)
				.replace("{endurance}", this.endurance)
		}
		else if (this.agi == null) {
			var res =
				"<span class=\"log-title\"><b>Défenseur :</b></span>\n" +
				"<ul>\n" +
				" <li><i>PV max :</i> {pv_max}</li>\n" +
				" <li><i>Bouclier :</i> {bouclier}</li>\n" +
				" <li><i>Endurance :</i> {endurance}</li>\n" +

				"</ul>\n";
			return res.replace("{pv_max}", this.pv_max)
				.replace("{bouclier}", this.bouclier)
				.replace("{endurance}", this.endurance)
		}
		else {
			var res =
				"<span class=\"log-title\"><b>Défenseur :</b></span>\n" +
				"<ul>\n" +
				" <li><i>PV max :</i> {pv_max}</li>\n" +
				" <li><i>Bouclier :</i> {bouclier}</li>\n" +
				" <li><i>Endurance :</i> {endurance}</li>\n" +
				" <li><i> Agilité : </i> {agi}</li>\n" +

				"</ul>\n";
			return res.replace("{pv_max}", this.pv_max)
				.replace("{bouclier}", this.bouclier)
				.replace("{endurance}", this.endurance)
				.replace("{agi}", this.agi)
		}

	}

	atqToStr() {
		var shield = parseInt(elem_inputs.bouclier.value) / 100;
		var bonus;
		var bonus_type;
		var bonus_attaque;
		var type_capa = parseInt(elem_inputs.capacite_type.value);
		if (isNaN(this.val_bonus)) {
			bonus = 0;
		}
		bonus = choix_bonus();

		if (this.atq_type) {
			if (type_capa == 0) {
				//burst
				if (shield != 0) {
					bonus_type = choix_bonus() + 20;
					bonus = capacite_bonus(bonus_type);

				} else {
					bonus_type = choix_bonus() + 30;
					bonus = capacite_bonus(bonus_type);
				}
			} else if (type_capa == 1) {
				bonus_type = choix_bonus() + 20;
				bonus = capacite_bonus(bonus_type);
			} else if (type_capa == 2) {
				bonus = capacite_bonus(bonus);
			}
		}
		var res =
			"**Attaquant :**\n" +
			"- *Bonus :* {bonus}\n" +
			"- *Valeur du bonus :* {val_bonus}\n" +
			"- *{atq_type}*\n" +
			"- *{dist}*\n";

		if (!this.atq_type) {
			res = res.replace("{atq_type}", "Attaque normale");
		} else {
			res = res.replace("{atq_type}", "Capacité: {capa_type}");
		}

		if (!this.dist) {
			res = res.replace("{dist}", "Corps-à-corps");
		} else {
			res = res.replace("{dist}", "Distance");
		}

		return res.replace("{bonus}", this.bonus)
			.replace("{val_bonus}", bonus)
			.replace("{capa_type}", this.capa_type);
	}

	atqToHtml() {
		var bonus_attaque;
		var bonus_type;
		var shield = parseInt(elem_inputs.bouclier.value) / 100;
		var bonus;
		var type_capa = parseInt(elem_inputs.capacite_type.value);
		if (isNaN(this.val_bonus)) {
			bonus = 0;
		}
		bonus = choix_bonus();

		if (this.atq_type) {
			if (type_capa == 0) {
				//burst
				if (shield != 0) {
					bonus_type = choix_bonus() + 20;
					bonus = capacite_bonus(bonus_type);

				} else {
					bonus_type = choix_bonus() + 30;
					bonus = capacite_bonus(bonus_type);
				}
			} else if (type_capa == 1) {
				bonus_type = choix_bonus() + 20;
				bonus = capacite_bonus(bonus_type);
			} else if (type_capa == 2) {
				bonus = capacite_bonus(bonus);
			}
		}

		var res =
			"<span class=\"log-title\"><b>Attaquant :</b></span>\n" +
			"<ul>\n" +
			" <li><i>Bonus :</i> {bonus}</li>\n" +
			" <li><i>Valeur du bonus :</i> {val_bonus}</li>\n" +
			" <li>{atq_type}</li>\n" +
			" <li>{dist}</li>\n" +
			"</ul>\n";

		if (!this.atq_type) {
			res = res.replace("{atq_type}", "Attaque normale");
		} else {
			res = res.replace("{atq_type}", "Capacité: {capa_type}");
		}

		if (!this.dist) {
			res = res.replace("{dist}", "Corps-à-corps");
		} else {
			res = res.replace("{dist}", "Distance");
		}

		return res.replace("{bonus}", this.bonus)

			.replace("{val_bonus}", bonus)
			.replace("{capa_type}", this.capa_type);
	}

	desToStr() {
		var res =
			"**Dés :**\n" +
			"- *Atq :* {des_atq}\n" +
			"- *Def :* {des_def}\n" +
			"- *Remise :* {remise}\n" +
			"- *Type de défense :* {des_esquive}\n";
		if (this.des_bonus_def) {
			res = res.replace("{remise}", "Oui");
		} else {
			res = res.replace("{remise}", "Non");
		}

		if (!this.des_esquive) {
			res = res.replace("{des_esquive}", "Endurance");
		} else {
			res = res.replace("{des_esquive}", "Esquive");
		}

		return res.replace("{des_atq}", this.des_atq)
			.replace("{des_def}", this.des_def);
	}

	desToHtml() {
		var res =
			"<span class=\"log-title\"><b>Dés :</b></span>\n" +
			"<ul>\n" +
			" <li><i>ATQ</i> : {des_atq}</li>\n" +
			" <li><i>DEF :</i> {des_def}</li>\n" +
			" <li><i>Remise :</i> {remise}</li>\n" +
			" <li><i>Type de défense :</i> {des_esquive}</li>\n" +
			"</ul>\n";
		if (this.des_bonus_def) {
			res = res.replace("{remise}", "Oui");
		} else {
			res = res.replace("{remise}", "Non");
		}

		if (!this.des_esquive) {
			res = res.replace("{des_esquive}", "Endurance");
		} else {
			res = res.replace("{des_esquive}", "Esquive");
		}

		return res.replace("{des_atq}", this.des_atq)
			.replace("{des_def}", this.des_def);
	}

	resToStr() {
		if (isNaN(this.res_deg)){
			this.res_deg="Aucun";
		}
		if (this.res_deg == null ) {
			this.res_deg="Aucun";
		}
		var res =
			"**Résultats :**\n" +
			"- *Dégâts :* {res_deg}\n" +
			"- *PV restants :* {pv_reste}\n";

		return res.replace("{res_deg}", this.res_deg)
			.replace("{pv_reste}", this.pv_reste)
	}

	resToHtml() {
		if (isNaN(this.res_deg)){
			this.res_deg="Aucun";
		}
		if (this.res_deg == null ) {
			this.res_deg="Aucun";
		}
		var res =
			"<span class=\"log-title\"><b>Résultats :</b></span>\n" +
			"<ul>\n" +
			" <li><i>Dégâts :</i> <b>{res_deg}</b></li>\n" +
			" <li><i>PV restants :</i> <b>{pv_reste}</b></li>\n" +
			"<ul>\n";

		return res.replace("{res_deg}", this.res_deg)
			.replace("{pv_reste}", this.pv_reste)
	}

	toHtml() {
		var res =
			"<div class=\"log-element\">" +
			"<div class=\"log-date\">" + this.formatDate(this.date) + "</div>" +
			"<div class=\"log-block\">" + this.defToHtml() + "</div><br>" +
			"<div class=\"log-block\">" + this.atqToHtml() + "</div><br>" +
			"<div class=\"log-block\">" + this.desToHtml() + "</div><br>" +
			"<div class=\"log-block\">" + this.resToHtml() + "</div><hr></div>";
		return res;
	}

	toString() {
		return this.formatDate(this.date) + "\n\n" +
			this.defToStr() + "\n" + this.atqToStr() + "\n" +
			this.desToStr() + "\n" + this.resToStr()
	}
}

var logs = new Array();
var elem_inputs = new Elements_getter(elemIDs, radioGroupsName);

function calculate() {
	elem_inputs.refresh();
	selection = parseInt(elem_inputs.atq_type.value); //valeur si on choisit une attaque normale ou une Capacité
	if (selection == 0) {
		degat_normaux();
	} else {
		degat_type();
	}
	log_ecriture();
}

function roundir(x) {
  return Math.trunc(Number.parseFloat(x).toFixed(2));
}

function degat_normaux() {
	var remise = elem_inputs.des_bonus_def.checked;
	var d, endu_de, finaux, max;
	var bonus = choix_bonus();
	var bonus = (bonus / 100);
	var pv = parseInt(elem_inputs.pv_max.value); //champ pv du programme
	var atq = parseInt(elem_inputs.des_atq.value); //champ attaque dans dé
	var defe = parseInt(elem_inputs.des_def.value); //champ défense dans dé
	var endu_val = parseInt(elem_inputs.endurance.value); //valeur de l'endurance dans les stats
	var agi_val = parseInt(elem_inputs.agi.value); //valeur de l'agi dans les stats
	var shield = parseInt(elem_inputs.bouclier.value) / 100; //valeur du champ "bouclier"
	d = calculate_degat(bonus, atq, defe);
	sel_def = parseInt(elem_inputs.des_esquive.value); //insérer le nom qui correspond
	if (!sel_def) { //Endurance (valeur = 0)
		endu_de = defe;
	} else { //Esquive & test (valeur = 1)
		if (remise) {
			if (defe < (agi_val / 2)) { //esquive réussi : Pas de dégât
				defe = 0;
				endu_de = 0;
			} else { //esquive raté
				endu_val = 0;
				endu_de = 10;
			}
		} else {
			if (defe <= (agi_val / 2)) { //esquive réussi : pas de dégât
				defe = 0;
				endu_de = 0;
			} else { //esquive raté
				endu_val = 0;
				endu_de = 10;
			}
		}
	}

	if (atq == 0) {
		d = (0.9 + bonus);
		endu_val = 0;

	} else if (defe == 0) {
		d = 0;
	} else if (atq == 1) {
		d=d-bonus;
		d=d*1.4+bonus;
		d=roundir(d);
	}

	finaux = reussite_endurance(endu_de, endu_val, pv, d, shield);
	max = finaux;
	if ((pv >= 100) && (pv < 200)) {
		max = pv/2;
	}

	if (finaux > max) {
		finaux = max;
	}
	vie_restante(finaux);
}

function degat_type() {
	var remise = elem_inputs.des_bonus_def.checked;
	var bonus_attaque, bonus_type, d, endu_de, finaux, max;
	var bonus = parseInt(elem_inputs.bonus.value); //valeur du champ "bonus"
	var pv = parseInt(elem_inputs.pv_max.value); //valeur du champ PV au départ
	var atq = parseInt(elem_inputs.des_atq.value); //valeur du dés d'Attaque
	var defe = parseInt(elem_inputs.des_def.value); //valeur du dé de défense
	var sel_defe = parseInt(elem_inputs.des_esquive.value); //type de défense - valeur dans dés [Endurance ou Esquive raté]
	var type_capa = parseInt(elem_inputs.capacite_type.value); //Valeur de la spinbox dans capacité ["Burst", "Autre", "Perforante"]
	var shield = parseInt(elem_inputs.bouclier.value) / 100; //valeur du champ "Bouclier"
	var endu_val = parseInt(elem_inputs.endurance.value); //valeur champ "endurance" dans stats
	var agi_val = parseInt(elem_inputs.agi.value); //valeur champ "agi" dans stats

	switch (sel_defe) {
		case 0: //Endurance
			endu_de = defe;
			break;
		case 1: //Esquive
			if (remise) {
				if (defe < (agi_val / 2)) {
					defe = 0;
					endu_de = 0;
				} else {
					endu_val = 0;
					endu_de = 10;
				}
			} else {
				if (defe <= (agi_val / 2)) {
					defe = 0;
					endu_de = 0;
				} else {
					endu_val = 0;
					endu_de = 10;
				}
			}
			break;
	}

	switch (type_capa) {
		case 0: //burst
			if (shield != 0) {
				bonus_type = capacite_bonus(20);
				bonus = (bonus_type + bonus) / 100;
				[d, endu_val] = degat_burst_bouclier(bonus, atq, defe, endu_val);
			} else {
				bonus_type = capacite_bonus(30);
				bonus = ((bonus + bonus_type) / 100);
				[d, endu_val] = degat_burst(bonus, atq, defe, endu_val);
			}
			break;

		case 1: //Perforant
			bonus_type = capacite_bonus(20);
			bonus = ((bonus_type + bonus) / 100);
			endu_val = 0;
			shield = 0;
			[d, endu_val] = degat_perforant(bonus, atq, defe, endu_val);
			break;

		case 2: //Autre
			if (isNaN(bonus)) {
				bonus = 0;
			}
			bonus_attaque = choix_bonus();
			bonus = ((bonus_attaque + bonus) / 100);
			bonus = capacite_bonus(bonus);
			endu_val = parseInt(elem_inputs.endurance.value); //récupérer la valeur du champ d'endurance
			shield = parseInt(elem_inputs.bouclier.value);
			[d, endu_val] = degat_autre(bonus, atq, defe, endu_val);
			break;
	}

	finaux = reussite_endurance(endu_de, endu_val, pv, d, shield);
	max = finaux;
	if ((pv >= 100) && (pv < 200)) {
		max = Math.trunc((pv)/2);
	}
	if (finaux > max) {
		finaux = max;
	};
	finaux=Math.trunc(finaux);
	vie_restante(finaux);
}

function choix_bonus() {
	var b;
	var bonus = parseInt(elem_inputs.arme.value);
	var bonus_val = parseInt(elem_inputs.bonus.value);
	var dist = parseInt(elem_inputs.dist_atq.value); //récupération du bouton distance sur la boite bonus
	if (isNaN(bonus_val)) {
		bonus_val = 0;
	}
	switch (bonus) {
		case 0: //Aucun
			b = 0;
			break;
		case 1: //Pouvoir
			b = 10 + bonus_val;
			break;
		case 2: //Fusil
			b = 10 + bonus_val;
			if (!dist) { //est checked
				b = b + 5;
			};
			break;
		case 3: //Projectile
			b = 5 + bonus_val;
			break;
		case 4: //Épée
			b = 10 + bonus_val;
			break;
		case 5: //Contondant
			b = 15 + bonus_val;
			break;
		case 6: //Couteau
			b = 5 + bonus_val;
			break;
		case 7: //Pistolet
			b = 8 + bonus_val;
			if (dist) {
				b = b - 3;
			}
			break;
		case 8: //Canon
			b = 15 + bonus_val;
			if (!dist) { //est check
				b = b + 10;
			};
			break;
		case 9: //Autre
			b = bonus_val;
			break;
	}
	if (b >= 100) {
		b = 100;
	}
	return b;
}

function reussite_endurance(endu_de, endu_val, pv, d, shield) {
	var finaux;
	var d = Math.abs(Math.trunc(d * 100));
	var bouclier = Math.abs(Math.trunc(d * (1 - shield))); //au besoin, placé des int pour convertir les valeurs
	var remise = elem_inputs.des_bonus_def.checked; //checkbox "bonus"

	if (remise) { //est check
		if ((endu_de > endu_val) || (endu_de == endu_val)) {
			finaux = bouclier;
		} else if (endu_val == 0) {
			finaux = bouclier;
		} else {
			finaux = bouclier * (1 - (10 * (Math.abs(endu_val - endu_de) + 1)) / 100);
		}
	} else {
		if (endu_de > endu_val) {
			finaux = bouclier;
		} else if (endu_val == 0) {
			finaux = bouclier;
		} else {
			finaux = bouclier * (1 - (10 * (Math.abs(endu_val - endu_de) + 1)) / 100);
		}
	}
	if (finaux >= pv) {
		finaux = pv;
	}
	return Math.trunc(finaux);
}

function capacite_bonus(bonus) {
	var atq = parseInt(elem_inputs.des_atq.value) //valeur dé champ Attaque
	if (atq == 0) {
		bonus = bonus * 1.8;
		bonus=roundir(bonus);
	} else if (atq == 1) {
		bonus = bonus * 1.4;
		bonus=roundir(bonus);
	}
	return bonus;
}

function calculate_degat(bonus, atq, defe) {
	var d;
	d = Math.abs(atq - defe);
	switch (d) {
		case 0:
			d = (0 + bonus);
			break;
		case 1:
			d = (0.05 + bonus);
			break;
		case 2:
			d = (0.1 + bonus);
			break;
		case 3: //En cas de 3 ou de 4, faire d = 0.2 + bonus
		case 4:
			d = (0.2 + bonus);
			break;
		case 5:
		case 6:
			d = (0.3 + bonus);
			break;
		case 7:
		case 8:
			d = (0.4 + bonus);
			break;
		default:
			d = (0.5 + bonus);
			break;
	}
	return d;
}

function degat_burst(bonus, atq, defe, endu_val) {
	let d;
	if (atq == 0) {
		d = 0.55 + bonus;
		endu_val = 0;
	} else if (defe == 0) {
		d = 0;
	} else if (atq == 1) {
		d = calculate_degat(bonus, atq, defe);
	} else {
		d = calculate_degat(bonus, atq, defe);
	}
	return [d, endu_val];
}

function degat_burst_bouclier(bonus, atq, defe, endu_val) {
	let d;
	if (atq == 0) {
		d = (0.5 + bonus);
		endu_val = 0;
	} else if (defe == 0) {
		d = 0;
	} else if (atq == 1) {
		d = calculate_degat(bonus, atq, defe);
	} else {
		d = calculate_degat(bonus, atq, defe);
	}
	return [d, endu_val];
}

function degat_perforant(bonus, atq, defe, endu_val) {
	var d;
	if (atq == 0) {
		d = (0.55 + bonus);
		endu_val = 0;
	} else if (defe == 0) {
		d = 0;
	} else if (atq == 1) {
		d = calculate_degat(bonus, atq, defe);
	} else {
		d = calculate_degat(bonus, atq, defe);
	}
	return [d, endu_val];
}

function degat_autre(bonus, atq, defe, endu_val) {
	var d;
	if (atq == 0) {
		d = (0.5 + bonus);
		endu_val = 0;
	} else if (defe == 0) {
		d = 0;
	} else if (atq == 1) {
		d = calculate_degat(bonus, atq, defe);
	} else {
		d = calculate_degat(bonus, atq, defe);
	}
	return [d, endu_val];
}

function phrase_esquive(finaux) {
	var remise = elem_inputs.des_bonus_def.checked;
	var atq = parseInt(elem_inputs.des_atq.value); //champ attaque dans dé
	var defe = parseInt(elem_inputs.des_def.value); //champ défense dans dé
	sel_def = parseInt(elem_inputs.des_esquive.value);
	var agi_val = parseInt(elem_inputs.agi.value); //valeur de l'agi dans les stats
	if (sel_def) {
		if (remise) {
			if (defe < (agi_val / 2)) {
				finaux = 'Esquive réussie';
			}
		} else {
			if (defe <= (agi_val / 2)) {
				finaux = 'Esquive réussie';
			}
		}
	}
	return finaux;

}

function vie_restante(finaux) {
	var vie = parseInt(elem_inputs.pv_reste.value) - finaux; //champ pv restant
	finaux = phrase_esquive(finaux)
	if (isNaN(finaux)) {
		vie = elem_inputs.pv_max.value;
	}
	elem_inputs.res_deg.innerHTML = finaux;
	elem_inputs.pv_reste.value = (vie <= 0 || isNaN(vie)) ? 0 : vie;
	elem_inputs.res_pv.innerHTML = (vie <= 0 || isNaN(vie)) ? "X" : vie;
}

function createLogFromActualInput() {
	elem_inputs.refresh();
	return new LogObject(elem_inputs.pv_max.valueAsNumber, elem_inputs.bouclier.valueAsNumber,
		elem_inputs.endurance.valueAsNumber, elem_inputs.agi.valueAsNumber, elem_inputs.arme.selectedOptions[0].innerText,
		elem_inputs.bonus.valueAsNumber, elem_inputs.atq_type.value, elem_inputs.capacite_type.selectedOptions[0].innerText,
		elem_inputs.dist_atq.value, elem_inputs.des_atq.valueAsNumber, elem_inputs.des_def.valueAsNumber,
		elem_inputs.des_bonus_def.checked, elem_inputs.des_esquive.value, parseInt(elem_inputs.res_deg.innerText),
		elem_inputs.pv_reste.valueAsNumber, new Date())
}

function concatLogs(total, current) {
	return total + "\n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n" + current.toString();
}
