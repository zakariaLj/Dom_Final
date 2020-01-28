let NomAjouter = document.getElementById('SpanName');
let TextNom = document.getElementById('entrerNom');
let BtGo = document.getElementById('Btgo');


let buttonGo = () => {

    if (TextNom.value != " ") {

        NomAjouter.innerHTML = TextNom.value;
        TextNom.value = " ";

    } else {
        alert("entrer un nom");

    }



}

BtGo.addEventListener('click', buttonGo);