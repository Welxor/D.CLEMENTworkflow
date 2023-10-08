"use strict"

let nfeux, namemusic, xmusic, changement=0, nmusic=5, sante=10; //les variables clés.

for(nfeux=30; 0 <nfeux; nfeux--){                //On entamme la boucle nous permettans le voyage.

    xmusic=Math.random();                   //ce nombre va servir à l'identification de la musique que nous allons écouter.

        if(xmusic<=1/nmusic){               //Ces conditions assigne la musique en fonction du nombre de mathrandom.
            namemusic="Anissa - Wejdene";
            sante--;
            changement++;
        } else if(0<xmusic && xmusic<=(1/nmusic)+(1/nmusic)){
            namemusic="Arabest - SebastiAn";
            changement++;
        } else if((1/nmusic)+(1/nmusic)<xmusic && xmusic<=(1/nmusic)+(1/nmusic)*2){
            namemusic="You Never Know What You Can Do (Till You Find Out) (2001) - Nadja";
            changement++;
        } else if(xmusic<=(1/nmusic)+(1/nmusic)*2<xmusic && xmusic<=(1/nmusic)+(1/nmusic)*3){
            namemusic="ト​ラ​ブ​ル​メ​ー​カ​ー - Macroblank";
            changement++;
        } else if(xmusic<=(1/nmusic)+(1/nmusic)*3<xmusic && xmusic<=1){
            namemusic="Pure Imagination - Maroon 5";
            changement++;
        } else {console.log(`Fatal error does not compute.`);}  //Dans le cas ou xmusic=0 ou autres erreurs

        console.log(`Musique en cours:${namemusic}, nombre de feux restant: ${nfeux}.`);
}
if(sante<=0){                               //Simplement les conditions de victoire/défaites
    console.log(`Pierre est bien arrivé à destination après ${changement} changements de taxis.`);
} else {
    console.log(`explosion`);
}