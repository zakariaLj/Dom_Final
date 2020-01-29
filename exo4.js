let buttonChange = document.getElementById('bouttonChng');
let Crouge1 = document.getElementById('carreRouge1');
Crouge1.classList = 'carreRouge'
let Crouge2 = document.getElementById('carreRouge2');
Crouge2.classList = 'd-none'
let nbrMove = document.getElementById('nbrMove');
let BtNbrMove = document.getElementById('boutonMoove');
let compteur = 0;

let gotoChange = (Crouge1, Crouge2) => {
    if (Crouge1.classList == 'd-none') {
        Crouge1.classList = 'carreRouge';
        Crouge2.classList = 'd-none';

    } else {
        Crouge1.classList = 'd-none';
        Crouge2.classList = 'carreRouge';

    }
    compteur++;
    BtNbrMove.innerHTML = `Nombre de tour = ${compteur}`
}


buttonChange.addEventListener('click', () => gotoChange(Crouge1, Crouge2));

let addToMove = () => {
    compteur = 0;
    BtNbrMove.innerHTML = `Nombre de tour = ${compteur}`
}


BtNbrMove.addEventListener('click', addToMove);