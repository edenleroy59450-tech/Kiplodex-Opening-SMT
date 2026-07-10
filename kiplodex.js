let save=chargerSauvegarde();

let div=document.getElementById("kiplodex");

KIPLOKONES.forEach(k=>{

let obtenu=save.collection.includes(k.id);

div.innerHTML+=`

<div class="kiplokone">

<h2>${obtenu ? k.nom : "???"}</h2>

<p>${obtenu ? k.type : "Inconnu"}</p>

<p>${obtenu ? k.rarete : ""}</p>

</div>

`;

});
