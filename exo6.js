// Niveau 1

let resultat = document.getElementById('resultat');
let Equals = document.getElementById('equals');
let Nbr1 = document.getElementById('nbr1');
let Nbr2 = document.getElementById('nbr2');



let GOtoOparete = () => {
    if (document.getElementById('addition').selected) {
        resultat.innerHTML = parseInt(Nbr1.value) + parseInt(Nbr2.value);


    } else if (document.getElementById('soustraction').selected) {
        resultat.innerHTML = parseInt(Nbr1.value) - parseInt(Nbr2.value);

    } else if (document.getElementById('multi').selected) {
        resultat.innerHTML = parseInt(Nbr1.value) * parseInt(Nbr2.value);
    } else {
        resultat.innerHTML = parseInt(Nbr1.value) / parseInt(Nbr2.value);
    }

}
Equals.addEventListener('click', GOtoOparete);


// Niveau 2