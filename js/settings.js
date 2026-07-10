document.getElementById("reset").onclick=function(){

if(confirm("Supprimer toute la sauvegarde ?")){

localStorage.removeItem("kiplokones");

location.reload();

}

}
