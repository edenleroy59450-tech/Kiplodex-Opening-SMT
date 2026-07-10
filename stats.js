let save=chargerSauvegarde();

document.getElementById("openedBoosters").innerText=save.boosters;

let uniques=[...new Set(save.collection)];

document.getElementById("owned").innerText=uniques.length+" / "+KIPLOKONES.length;
