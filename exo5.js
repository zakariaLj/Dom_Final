let Ajouter = document.getElementById('Add');
let Sup = document.getElementById('Delete');
let SupTout = document.getElementById('DeleteAll');
let ImageDiv = document.getElementById('ImageDiv');
let Image = document.createElement('img');
let NewDiv = document.getElementById('ImageChildDiv');

let GoAdd = () => {
    NewDiv = document.getElementById('ImageChildDiv');
    Image = document.createElement('img');
    Image.src = './image/ballon.jpg'
    NewDiv.appendChild(Image)
}


let GoSupp = () => {
    NewDiv.lastChild.remove(Image)


}

let GoSuppTout = () => {
    while (NewDiv.firstChild) {
        NewDiv.removeChild(NewDiv.firstChild);
    }
}


Ajouter.addEventListener('click', GoAdd);
Sup.addEventListener('click', GoSupp);
SupTout.addEventListener('click', GoSuppTout);