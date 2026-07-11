function chargerSauvegarde(){

    let save = localStorage.getItem("kiplokones");


    if(save === null){

        let nouvelleSauvegarde = {
            collection: [],
            boosters: 0
        };


        localStorage.setItem(
            "kiplokones",
            JSON.stringify(nouvelleSauvegarde)
        );


        return nouvelleSauvegarde;

    }


    return JSON.parse(save);

}



function sauvegarder(data){

    localStorage.setItem(
        "kiplokones",
        JSON.stringify(data)
    );

}
