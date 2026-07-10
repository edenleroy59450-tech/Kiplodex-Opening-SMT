function chargerSauvegarde(){

    let save = localStorage.getItem("kiplokones");

    if(save==null){

        save={
            collection:[],
            boosters:0
        }

        localStorage.setItem("kiplokones",JSON.stringify(save));

        return save;

    }

    return JSON.parse(save);

}

function sauvegarder(data){

    localStorage.setItem("kiplokones",JSON.stringify(data));

}
