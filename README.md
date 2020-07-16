
<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Résumé](#rsum)
- [La défense](#la-dfense)
- [Dégâts](#dgts)
- [Bouclier](#bouclier)
- [Cases et déplacement](#cases-et-dplacement)
- [Effets des réussites critiques](#effets-des-russites-critiques)
	- [Sur les capacités](#sur-les-capacits)
	- [Sur les attaques "normales" (hors capacités)](#sur-les-attaques-normales-hors-capacits)
- [Armes](#armes)

<!-- /TOC -->

Avant de rentrer dans le vif du sujet, je dois vous parler du système de combat. Tout d'abord, il faut savoir que tout est automatisé, vous n'avez pas à calculer vos dégâts, je m'occupe de tout.

Les combats se déroulent au tour par tour, avec un lancé d'un dé 10 d'attaque et de défense.

Un tour est lorsque tous les combattants (ennemis compris) ont joué. Mais les cooldown ne s'actualise que durant le tour personnel du joueur et non pas le tour "général" du combat (comme dans la majorité des jeux tactiques, notamment dofus).

# Résumé

-   Lancé de dés d'attaque et de défense
    -   L'endurance permet d'encaisser les dégâts.
    -   L'esquive permet de ne pas prendre de dégât. Elle est réussie si le dé est moitié moins du dé d'attaque de l'adversaire.
-   Dés de 10 lié à votre caractéristiques
    -   Implant : Valeur seuil = strictement inférieure à votre caractéristique (7 pour 8, 6 pour 7, etc).
    -   Pas d'implant : Seuil = caractéristique
-   Meilleur jet : 0, pire jet : 10
    -   Un 0 correspond à une "Ultra réussite critique" et un 1 à une "réussite critique".
    -   Seul un implant (ou remise) permet d'avoir de faire un URC.

# La défense

La caractéristique que vous lancez pour votre défense est soit un dé d'endurance ou d'agilité.

-   L'endurance vous permet d'encaisser le coup, il recevra donc moins de dégâts.
-   L'agilité vous permet d'esquiver le coup (et donc de ne pas prendre de dégâts). De plus, pour réussir votre esquive, vous devez faire moitié moins que votre statistiques d'agilité. Le dé $esquive a été créée spécifiquement pour ça !

Il existe cependant des attaques qui ne rentrent dans cette catégorie : les altérations d'état.

-   Les attaques mentales : Elles nécessitent une défense avec un dé d'intelligence.
-   Les attaques liés aux poisons, maladie et blessures : Elles nécessitent un dé de karma.
    A noter que pour les dégâts persistants, le dés de karma est à lancer chaque tour pour supprimé l'altération. Sinon, cette dernière dure 3 tours au maximum.

Choisissez donc bien en fonction de vos caractéristiques !

Vous devez OBLIGATOIREMENT lancer votre dé avant de déterminer votre action. Mais vous n'êtes pas obligé d'attendre le dé de défense de votre adversaire. Dans tous les cas, l'action finale avec les dégâts sera après le lancé des protagonistes de l'action.

Dans le cas où il y aurait un 1 VS plusieurs, la personne en sous nombre doit lancer un dé de défense pour chaque attaque reçu et peut attaquer un certain nombre de personnage en fonction de son niveau.

# Dégâts

Les dégâts sont déterminés en fonction de l'écart de dé entre l'attaquant et le défenseur dans le cas où le défenseur n'a pas réussi à esquiver l'attaque. Ainsi, plus la différence est haute, plus le défenseur perdra de pv. Il est à savoir que les dégâts sont calculés sur une base de 100 PV. Ainsi :

Ecart de 9 (voire+): Coup critique : L'adversaire perd 50 PV.

De 8 à 7 : Très Bon dégât : Le défenseur perd 40 PV.

De 6 à 5 : Bon dégât : Le défenseur perd 30 PV.

De 4 à 3 : Dégât moyen: Le défenseur perd 20 PV.

1- 2  : Dégât faible : Le défenseur perd 10 PV.

0 : Dégâts très faible, le défenseur perd 5 PV.

Dans le cas où le défenseur aurait encaissé le coup (dé d'endurance), il perd moins de pv. La valeur de sa caractéristique est une valeur seuil, et plus le dés sera bas mieux le défenseur encaisse. Un score de 0 étant un URC, la personne encaisse tous les dégâts.

> La valeur de la caractéristique détermine le montant maximum qu'il est possible d'encaisser.

# Bouclier

Les boucliers protègent des dégâts. Dans les faits, cela fonctionne exactement comme un encaissement avec un dé d'endurance.

Cependant, les résistances sont fixes et liés soit à votre équipement, soit au rang de votre adversaire. En général, il existe :

-   Armure légère : Diminution de 10%
-   Armure moyenne : Diminution de 25%
-   Pré- requis : Force = 3
-   Malus si porté sans les pré- requis : +1 aux dés d'agilité
-   Armure lourde : Diminution de 50%
-   Pré- requis : Force = 5
-   Malus si porté sans les pré- requis : +2 aux dés d'agilité

Si votre personnage fait un ultra critique,, ou si vous utilisez une capacité perforante, le bouclier est ignoré.

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

# Effets des réussites critiques

## Sur les capacités

Les réussites critiques ont pour effets de multipliés les effets d'une compétences, que ce soit en terme de dégâts pour les compétences offensives, qu'en terme de bonus ou malus.

Dans le cas où votre personnage fait :

-   Une réussite critique : Son bonus sera multiplié par 1,4.
-   Une Ultra réussite critique : Son bonus sera multiplié par 1.8.
    Lorsque l'on multiplie, on ne prend pas en compte le "pourcentage" (la division par 100).

Le calculs des dégâts des compétences offensives sont automatisés, vous n'avez donc pas besoin de vérifier le bonus multiplicateur. Cependant pour les compétences non- offensives, vous devrez calculer en fonction du multiplicateur.

## Sur les attaques "normales" (hors capacités)

A savoir que seuls les implants permettent d'atteindre le score de 0.

-   Les Ultra réussite- critiques d'attaque : Les dégâts sont multipliés par 1.8 et on outrepasse la défense de l'adversaire.
-   Les UltraRC de défense: Lorsqu'un combattant a un score de dés d'endurance ou d'agilité égal à 0, il annule automatiquement l'attaque de son adversaire, quelque soit la valeur de son dé, sauf dans le cas où l'autre attaquant aura un 0 en endurance. Dans ce cas, le défenseur perdra 9 PV.

-   Les réussite- critique d'attaque :  Lorsqu'un combattant a un score de dés égal à 1, le score est multiplié par 1.4, exactement comme dans le cas d'une compétence.

A noter que lors d'une UC d'esquive, le combattant bénéficie d'une riposte avec un bonus de dégâts de 5%, en plus de ses bonus pré- existants. Les RC donnent droit à une riposte, sans bonus d'attaque.

# Armes

-   **ARME BLANCHE** → _FORCE_

    -   Couteau  : 5% -  Utilisation gratuite un tour sur deux. Si double couteau, il est possible d'activer le bonus en même temps et de donner 4 coups un tour sur deux.
    -   Epée : 10%
         → Uniquement utilisable au corps à corps (rang 1)

-   **PROJECTILES** : 5% → _PRÉCISION_
    		→ Rang 1 à 2

    > Exemple : Grenade, bombe, couteau...

-   **ARME À FEU** : → _PRÉCISION_

    -   _Pistolet_ : 8% -  8 charges
           →  Rang 1 à 2
           →  Malus de +2 au dé de PRECISION si utilisé sur le rang 3
    -   _Fusil_ : 10% -  12 charges
         →  Rang 2 à 3
        -   Malus de +1 au dé de PRECISION et bonus de 5% sur les dégât sur RANG 1.

-   **CANON** :  15% - 15 charges → _FORCE_
           → Rang 2 à 3
           → Bonus de 10% sur le dégât sur RANG 1.
        \-  Limité à une fois tous les 3 tours
        \-  A besoin de minimum 4 en force
        \-  Occasionne +2 sur dés d'agilité
        \-  Ne peut pas porter de module

    > Les artilleurs n'ont pas de malus d'agilités et n'ont pas besoin d'avoir 4 en force pour pouvoir porter ses armes

-   **CONTONDANT** : 15% → _FORCE_
    -   Utilisable uniquement au corps à corps (RANG 1)
    -   A besoin de minimum 4 en force
