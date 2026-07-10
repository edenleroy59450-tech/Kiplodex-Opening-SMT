let save=chargerSauvegarde();

document.getElementById("openBooster").onclick=function(){

    let resultat=document.getElementById("boosterResult");

    resultat.innerHTML="";

    let random=Math.floor(Math.random()*KIPLOKONES.length);

    let carte=KIPLOKONES[random];

    save.collection.push(carte.id);

    save.boosters++;

    sauvegarder(save);

    resultat.innerHTML=`

    <div class="card">

        <h2>${carte.nom}</h2>

        <p>Type : ${carte.type}</p>

        <p>Rareté : ${carte.rarete}</p>

    </div>

    `;

}
