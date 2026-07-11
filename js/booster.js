let save = chargerSauvegarde();

document.getElementById("openBooster").onclick = function () {

    let resultat = document.getElementById("boosterResult");

    resultat.innerHTML = "";

    let random = Math.floor(Math.random() * KIPLOKONES.length);

    let carte = KIPLOKONES[random];

    save.collection.push(carte.id);

    save.boosters++;

    sauvegarder(save);

    if (carte.image) {

        resultat.innerHTML = `
            <div class="card">
                <img src="${carte.image}" alt="${carte.nom}" class="card-image">
            </div>
        `;

    } else {

        resultat.innerHTML = `
            <div class="card">
                <h2>${carte.nom}</h2>
                <p>Type : ${carte.type}</p>
                <p>Rareté : ${carte.rarete}</p>
            </div>
        `;

    }

}
