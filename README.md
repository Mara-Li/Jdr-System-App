<!-- vscode-markdown-toc -->
* [Capacités](#Capacits)
* [Attaques normales](#Attaquesnormales)
* [Défenses normales](#Dfensesnormales)
* [Les Capacités](#LesCapacits)
* [ Les armes blanches](#Lesarmesblanches)
	* [Poigne - Agilité](#Poigne-Agilit)
	* [Epée - Force](#Epe-Force)
	* [ Masse - Force](#Masse-Force)
* [Armes à distance](#Armesdistance)
	* [Projectiles](#Projectiles)
	* [ Arme à feu](#Armefeu)
		* [Pistolet](#Pistolet)
		* [Fusil](#Fusil)
		* [Canon](#Canon)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

Avant de rentrer dans le vif du sujet, je dois vous parler du système de combat. Tout d'abord, il faut savoir que tout est automatisé, vous n'avez pas à calculer vos dégâts, je m'occupe de tout.

Les combats se déroulent au tour par tour, avec un lancé d'un dé 10 d'attaque et de défense.

Un tour est lorsque tous les combattants (ennemis compris) ont joué. Mais les cooldown ne s'actualise que durant le tour personnel du joueur et non pas le tour "général" du combat (comme dans la majorité des jeux tactiques, notamment dofus).

# La défense

La caractéristique que vous lancez pour votre défense est soit un dé d'endurance ou d'agilité.

-   L'endurance vous permet d'encaisser le coup, il recevra donc moins de dégâts.
-   L'agilité vous permet d'esquiver le coup (et donc de ne pas prendre de dégâts). De plus, pour réussir votre esquive, vous devez avoir un dé inférieur à l'attaque. L'action d'esquive faite peut aussi être aider par un pouvoir, et dans ce cas, c'est un dé lié à ce pouvoir qui doit être utilisé. Les conditions restent identiques.

Il existe cependant des attaques qui ne rentrent dans cette catégorie : les altérations d'état.

-   <u>Les attaques mentales</u> : Elles nécessitent une défense avec un dé d'intelligence.
-   <u>Les attaques liés aux poisons, maladie et blessures :</u> Elles nécessitent un dé de karma.
    A noter que pour les dégâts persistants, le dés de karma est à lancer chaque tour pour supprimer l'altération. Sinon, cette dernière dure 3 tours au maximum.

Choisissez donc bien en fonction de vos caractéristiques !



Vous devez OBLIGATOIREMENT lancer votre dé avant de déterminer votre action. Mais vous n'êtes pas obligé d'attendre le dé de défense de votre adversaire. Dans tous les cas, l'action finale avec les dégâts sera après le lancé des protagonistes de l'action.



Dans le cas où il y aurait un 1 VS plusieurs, la personne en sous nombre doit lancer un dé de défense pour chaque attaque reçu et peut attaquer un certain nombre de personnage en fonction de son niveau.

# Dégâts

Les dégâts sont déterminés en fonction de l'écart de dé entre l'attaquant et le défenseur dans le cas où le défenseur n'a pas réussi à esquiver l'attaque. Ainsi, plus la différence est haute, plus le défenseur perdra de PV. Il est à savoir que les dégâts sont calculés sur une base de 100 PV. Ainsi :

- **Ecart de 9 (voire +) :** <u>Coup critique :</u> L'adversaire perd 50 PV.

- **De 8 à 7 :** <u>Très Bon dégât :</u> Le défenseur perd 40 PV.

- **De 6 à 5 :** <u>Bon dégât :</u> Le défenseur perd 30 PV.

- **De 4 à 3 :** <u>Dégât moyen :</u> Le défenseur perd 20 PV.

- **De 1 à 2  :** <u>Dégât faible</u> : Le défenseur perd 10 PV.

- **0** : <u>Dégâts très faible :</u> le défenseur perd 5 PV.

Dans le cas où le défenseur aurait encaissé le coup (dé d'endurance), il perd moins de PV. La valeur de sa caractéristique est une valeur seuil, et plus le dés sera bas mieux le défenseur encaisse. Un score de 0 étant un UC, la personne encaisse tous les dégâts.

> La valeur de la caractéristique détermine le montant maximum qu'il est possible d'encaisser.
> Les dégâts finaux d'une attaque normale sont divisés par deux, dans des soucis d'équilibrage.

Les armes et les capacités ont des bonus passifs qui augmentent les dégâts.

# Bouclier

Les boucliers protègent des dégâts. Dans les faits, cela fonctionne exactement comme un encaissement avec un dé d'endurance.

Cependant, les résistances sont fixes et liés soit à votre équipement, soit au rang de votre adversaire. En général, il existe :

-   **Armure légère :** Diminution de 10%
-   **Armure moyenne :** Diminution de 25%
    -   *Pré- requis* : Force : 3
    -   *Malus si porté sans les pré-requis* : +1 aux dés d'agilité
-   **Armure lourde** : Diminution de 50%
    -   *Pré-requis* : Force : 5
    -   *Malus si porté sans les pré-requis* : +2 aux dés d'agilité

Si votre personnage fait un ultra critique, ou si vous utilisez une capacité perforante, le bouclier est ignoré.

# Cases et déplacement

Lors d'un début de combat, la pièce se sépare en trois rangs :

-   Rang 1 : Corps à corps
-   Rang 2 : Semi- distance
-   Rang 3 : Distance

Les joueurs commencent toujours au rang 3, et les ennemis se trouvent au début au rang 1.

Si un ennemi se déplace sur le Rang 3 et qu'il y a un allié, alors cet allié sera au rang 1 de cet ennemi, mais ne bougera pas pour les autres.
Au contraire, si un allié se trouve au rang 1 et qu'un ennemi va au rang 3, l'allié sera alors au rang 3 de l'ennemi, mais restera au corps à corps des autres.

Tous les joueurs peuvent se déplacer sur les cases comme ils veulent : ils peuvent donc remonter au premier rang en étant au dernier. Cependant, un joueur ne peut pas faire plusieurs déplacement par tour.

Les compétences et les pouvoirs ne prennent pas en compte la distance, contrairement aux armes.



Naturellement, on considère que les personnages "tireurs" sont systématiquement à couvert.



L'action "de s'abriter" permet à un personnage (blessé, par exemple) de se protéger efficacement (derrière un gros meuble, un mur) sans bouger. Les ennemis ont alors bien plus de mal à le viser et ont un malus de +3 en précision lorsqu'ils souhaitent tirer sur lui.

En contrepartie, tant qu'il est abrité, il ne peut plus ni attaquer, ni esquiver (il ne peut qu'endurer les dégâts).



Quand un personnage au corps à corps s'attaque à un autre personnage (notamment les tireurs), ce dernier est automatiquement mis "en duel", ce qui octroies aux attaquants un bonus de précision de -1. En outre, le défenseur à découvert a un malus de précision s'il veut tirer sur une personne en dehors du rang sur lequel il se trouve.



La position à découvert est analogue à la position "en duel", la seule différence étant que le tireur n'a pas de malus de visée sur les autres rangs. Les personnages de corps à corps sont automatiquement à découvert, contrairement aux tireurs.



Enfin, les personnages inconscients ne peuvent pas esquiver mais seulement endurer. Ils sont automatiquement à découvert.



Il y a donc trois positions :

- **Abrité** : +3 en précision pour les attaquants, mais ne peut ni attaquer, ni esquiver.

- **Découvert** : Bonus de -1 pour les attaquants.

- **Duel** : Bonus de -1 pour les attaquants, et +2 en précision si visée sur les autres rangs.



# Effets des réussites critiques

Les deux sont le résultat d'un dé naturel égal à 1, mais :

- Une personne bénéficiant d'un bonus de dé (remise) aura toujours un ultra critique.
- Une personne sans aucun bonus aura une réussite critique.

Notons que les résultats des attaques se fera toujours sur le dé modifié par les bonus et implants.

## <a name='Capacits'></a>Capacités

Les réussites critiques ont pour effets de multiplier les effets d'une compétences, que ce soit en terme de dégâts pour les compétences offensives, qu'en terme de bonus ou malus.

Dans le cas où votre personnage fait :

-   Une réussite critique : Son bonus sera multiplié par 1,4.
-   Un Ultra critique : Son bonus sera multiplié par 1.8.
    Lorsque l'on multiplie, on ne prend pas en compte le "pourcentage" (la division par 100).

Le calculs des dégâts des compétences offensives sont automatisés, vous n'avez donc pas besoin de vérifier le bonus multiplicateur. Cependant pour les compétences non- offensives, vous devrez calculer en fonction du multiplicateur.

## <a name='Attaquesnormales'></a>Attaques normales

-  Les Ultra-critiques d'attaque : Les dégâts sont multipliés par 1.8, avec un bonus de 15%, et on outrepasse les défenses de son adversaires. 

- Les réussite-critique d'attaque : Les dégâts sont multipliés par 1.4 avec un bonus de 10% et le bouclier est diminué de moitié. 

## <a name='Dfensesnormales'></a>Défenses normales

- Les Ultra-critique de défense : 

    - Dans le cas d'une esquive, le personnage bénéficiera d'une contre-attaque avec un léger bonus (de 5%), car il surprend son adversaire.
    - Dans le cas d'une endurance, il absorbera tous les dégâts.

- Les critiques de défense : 
    - En endurance, le personnage va absorber une majeure partie des dégâts. 
    - Dans une esquive, le personnage esquivera et bénificiera d'une contre-attaque simple. 

# Bonus
## <a name='LesCapacits'></a>Les Capacités

Les capacités offrent des bonus d'attaque, mais leur utilisation est limité, que ce soit en terme de points d'action, que d'utilisation par tour. Ce sont donc des attaques très puissantes, ou avec des passifs avantageux.

Il existe trois types principaux :

* <u>Les Burst</u> : Ce sont de puissantes attaques, mais qui ont du mal à passer à travers les boucliers. Ainsi, elles ont un bonus de 40% mais les boucliers impactent grandement les dégâts finaux. 
* <u> Les perforants </u> : Ce sont des attaques moins puissante qu'un burst, mais traversant toutes les défenses. Ainsi, les dégâts seront les mêmes qu'une attaque à 20% sans bouclier.
* <u> Les pouvoirs </u> : Les pouvoirs sont capacités ayant un bonus de 10%.
* <u> Le champ "autre"</u> : Ce dernier n'a aucun bonus, mais permet d'utiliser les armes et de bénéficier des légères différences en termes de bonus de coup-critique.

## <a name='Lesarmesblanches'></a> Les armes blanches

Le programme bloque donc automatiquement sur cette valeur. Il est cependant possible de créer une arme "spécifique" avec le champ autre.


A savoir aussi que le programme bloque aussi au corps à corps pour la partie "aucun" qui correspond en réalité à un simple coup de poing d'une personne sans aucun équipement (donc, sans gants de boxe, par exemple).

### <a name='Poigne-Agilit'></a>Poigne - Agilité

- **Bonus** : 5%
- Les poignes offrent deux attaques gratuite (sans coût de PA) un tour sur deux, cumulable s'il y a plusieurs poignes (au maximum de deux). Ainsi, il est possibles de donner 6 à 8 coups pour 4 PA.
Les poignes regroupent toutes les armes de "close-combat" : Couteau de combat, poing américain, gants de boxe....

### <a name='Epe-Force'></a>Epée - Force

- **Bonus** : 10%

### <a name='Masse-Force'></a> Masse - Force

- **Bonus** : 15%
- **Pré-requis** : 4 en force
- **Malus** : Bonus d'agilité de -2 pour l'adversaire.

## <a name='Armesdistance'></a>Armes à distance

### <a name='Projectiles'></a>Projectiles

- **Bonus** : 5 %
- **Placement** : Rang 1 à 2
> Exemple : Grenade, bombe, couteau...
> A savoir que les grenades ont des bonus en plus à fixer manuellement.

### <a name='Armefeu'></a> Arme à feu

#### <a name='Pistolet'></a>Pistolet

- **Nombre de balles (ou charges)** : 8
- **Bonus** : 8%
- **Placement** : 1 à 2
- **Malus de placement** : +2 Précision (rang 3)

#### <a name='Fusil'></a>Fusil

- **Nombre de balles (ou charges)** : 12
- **Bonus** : 10%
- **Placement** : Rang 2 à 3
- **Bonus de placement** : +5% (rang 1)
- **Malus de placement** : +1 Précision (rang 1)

#### <a name='Canon'></a>Canon

- **Bonus** : 20%
- **Malus** : +2 en agilité
- **Pré-requis** : 4 en force
- **Placement** : Rang 2 à 3
- **Limitation** :
	- Une fois tous les 3 tours.
	- Ne peut pas porter de modules
- **Bonus de placement** : +10% (rang 1)
- **Malus de placement** : +2 précision

> Les artilleurs n'ont pas de malus d'agilités et n'ont pas besoin d'avoir 4 en force pour pouvoir porter ses armes.

# Calculs

Après avoir vérifié la table, on récupère les dégâts. Ainsi $$d=dégâts\hspace{10px}de\hspace{10px} la\hspace{10px} table + bonus$$

* **PV perdus** : $$d = d * 100$$

* **Bouclier :** $$d * (1-bouclier)$$

* **Endurance et dégâts finaux** : $$finaux = bouclier * \frac{1-[10*(1+(endurance-défense))]}{100}$$
> Les dégâts finaux sont divisés par 2 dans le cas d'une attaque normale, afin d'équilibrer par rapport aux système de PA.

* **PV restants :** $$PV\hspace{10px}max - finaux$$
