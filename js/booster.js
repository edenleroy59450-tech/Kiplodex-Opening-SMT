document.getElementById("openBooster").onclick = function () {


    let save = chargerSauvegarde();


    let resultat = document.getElementById("boosterResult");


    resultat.innerHTML = "";


    let random = Math.floor(Math.random() * KIPLOKONES.length);


    let carte = KIPLOKONES[random];



    save.collection.push(carte.id);

    save.boosters++;


    sauvegarder(save);



   resultat.innerHTML = `
    <div class="card">
        <h2>${carte.nom}</h2>
        <p>${carte.type}</p>
        <p>${carte.rarete}</p>
    </div>
`;


};
