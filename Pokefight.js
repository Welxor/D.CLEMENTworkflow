"use strict"

//définition des stats
class Pokemon{ constructor(name, attack, defense, hp, luck){
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
    this.luck = luck;
}
    isLucky(){
        return Math.random() < this.luck;
    }

    attackPokemon(adversaire){
        if(this.isLucky()){
        console.log(`${adversaire.name} a subis ${this.attack-adversaire.defense} dégâts.`);
        return this.attack - adversaire.defense;
        } else {
        console.log(`${this.name} rate son attaque.`);
        return 0;
        }
    }
}

let poke1 = new Pokemon("Artifex", 166, 116, 136, 0.96);   //Création des pokémons (Ils sont homemade)
let poke2 = new Pokemon("Graptor", 130, 125, 163, 0.85);
while(0<poke1.hp && 0<poke2.hp){                           //Boucle de combat
    if(poke2.defense<poke1.attack && 0 < poke1.attackPokemon(poke2)){                         //Attaque du 1er pokémone
        poke2.hp = poke2.hp - poke1.attackPokemon(poke2);
        console.log(`${poke2.name} a ${poke2.hp}PV Au tour de ${poke2.name}`);
    }else{
        console.log(`${poke2.name} garde ${poke2.hp}PV Au tour de ${poke2.name}`);
    }

    if(poke1.hp<=0){                                       //Condition victoire/défaire
        console.log(`${poke1.name} est tombé K.O. L'adversaire l'emporte.`);
        break;
        }else if(poke2.hp<=0){
        console.log(`${poke2.name} est tombé K.O. L'adversaire l'emporte.`);
        break;
        }
    
    if(poke1.defense<poke2.attack && 0 < poke2.attackPokemon(poke1)){                         //attaque du second
        poke1.hp = poke1.hp - poke2.attackPokemon(poke1);
        console.log(`${poke1.name} a ${poke1.hp}PV Au tour de ${poke1.name}`);
    }else{
        console.log(`${poke1.name} garde ${poke1.hp}PV Au tour de ${poke1.name}`);
    }

    if(poke1.hp<=0){                                        //Condition victoire/défaire
        console.log(`${poke1.name} est tombé K.O. L'adversaire l'emporte.`);
        break;
        }else if(poke2.hp<=0){
        console.log(`${poke2.name} est tombé K.O. L'adversaire l'emporte.`);
        break;
        }
}