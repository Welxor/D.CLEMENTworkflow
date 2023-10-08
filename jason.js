"use strict"

    let fgRname, bRname, nrdRname, skReptic, chkRname, chancenom, chanceoffense;

class Actor{ constructor(name, attack, hp){ //création du générateur de stats de personnage.
    this.name = name;
    this.attack = attack;
    this.hp = hp;
    }



    offense(adversary){                     //Routine d'attaque.
        chanceoffense=Math.random();

        if(this.name!="Jason"){             //vérification si l'attaquant est ou n'est pas le tueur.
            if(chanceoffense<=0.5){         //l'attaquan est un survivant.
            console.log(`${this.name} blesse gravement ${adversary.name}.`);
            return this.attack+5;
            }else{
            console.log(`${this.name} attaque ${adversary.name}.`);
            return this.attack;
            }
        }
        else{                               //l'attaquant est le gros vilain.
            if(chanceoffense<=0.5){
            console.log(`${adversary.name} a esquivé son attaque.`);
            return 0;
            }
            else{
            console.log(`${this.name} attaque ${adversary.name}.`);
            return 0;
                }
            }
        if(adversary.hp<=0){
            console.log(`${this.name} a tué ${adversary.name}.`);
            }
        }
    }
}



Math.random() = chancenom;                  //Routinne d'assignation du tableau de noms aléatoire pour survivants de ligne 12 à 71
if(chandenom<=1/5){
    fgRname="Ripley";
} else if (1/5<chancenom && chancenom<=(1/5)*2){
    fgRname="EloÏne";
} else if (chancenom<=(1/5)*2 && chancenom<=(1/5)*3){
    fgRname="Opal";
} else if (chancenom<=(1/5)*3 && chancenom<=(1/5)*4){
    fgRname="Krolia";
} else {
    fgRname="Motoko";
}
Math.random() = chancenom;
if(chandenom<=1/5){
    bRname="Brandon";
} else if (1/5<chancenom && chancenom<=(1/5)*2){
    bRname="Kévin";
} else if (chancenom<=(1/5)*2 && chancenom<=(1/5)*3){
    bRname="Jean-Jean";
} else if (chancenom<=(1/5)*3 && chancenom<=(1/5)*4){
    bRname="Gontran";
}  else {
    bRname="Franky";
}
Math.random() = chancenom;
if(chandenom<=1/5){
    nrdRname="Titouan";
} else if (1/5<chancenom && chancenom<=(1/5)*2){
    nrdRname="Jean-Emmerique";
} else if (chancenom<=(1/5)*2 && chancenom<=(1/5)*3){
    nrdRname="Techo prêtre Magus";
} else if (chancenom<=(1/5)*3 && chancenom<=(1/5)*4){
    nrdRname="xXx_sasuke_xXx";
}  else {
    nrdRname="Toshiro";
}
Math.random() = chancenom;
if(chandenom<=1/5){
    skReptic="l'agent McDonut";
} else if (1/5<chancenom && chancenom<=(1/5)*2){
    skReptic="Jean Valjean";
} else if (chancenom<=(1/5)*2 && chancenom<=(1/5)*3){
    skReptic="Sarah de l'IIMIT";
} else if (chancenom<=(1/5)*3 && chancenom<=(1/5)*4){
    skReptic="Cécil";
}  else {
    skReptic="Motoko";
}
Math.random() = chancenom;
if(chandenom<=1/5){
    chkRname="Brenda";
} else if (1/5<chancenom && chancenom<=(1/5)*2){
    chkRname="Barbie";
} else if (chancenom<=(1/5)*2 && chancenom<=(1/5)*3){
    chkRname="Clarence";
} else if (chancenom<=(1/5)*3 && chancenom<=(1/5)*4){
    chkRname="Euphrasie";
}  else {
    chkRname="Shelly";
}


    let jason = new actor("Jason", 1, 100)
    let finalgirl = new actor(fgRname, 10, 1)
    let brat = new actor(bRname, 10, 1)
    let nerd = new actor(nrdRname, 10, 1)
    let skeptic = new actor(sktRname, 10, 1)
    let chick = new actor(chkRname, 10, 1)



while(0 < jason.hp){                            //corps des tours de la partie dans bois.
    jason.hp=finalgirl.offense(jason);
    console.log(`${finalgirl.name} blesse gravement ${adversary.name}.`);
    jason.hp=skeptic.offense(jason);
    jason.hp=brat.offense(jason);
    jason.hp=chick.offense(jason);

    jason.offense()
}                                               //navré je n'ai pas eu le temps de le finir à temps