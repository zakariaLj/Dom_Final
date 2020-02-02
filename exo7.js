let inputTache = document.getElementById('inputTache');
let list = document.getElementById('list');
let all = document.getElementById('all');
let done = document.getElementById('done');
let toDo = document.getElementById('toDo');
let tabList = [];
let tabTache = [];
let addList = () => {
    //Créer les éléments et styliser
    let check = document.createElement('input');
    check.type = 'checkbox';
    // tabCheck.push(check);
    let tache = document.createElement('h4');
    tache.innerHTML = `&nbsp ${inputTache.value} &nbsp`;
    tabTache.push(tache);
    let supp = document.createElement('button');
    supp.innerHTML = ' x ';
    // tabSupp.push(supp);
    let ligne = document.createElement('div');
    tabList.push(ligne);
    ligne.classList.add('d-flex');
    ligne.classList.add('flex-wrap');
    ligne.classList.add('align-items-center');
    ligne.classList.add('toDo');
    //Afficher les éléments
    list.appendChild(ligne);
    ligne.appendChild(check);
    ligne.appendChild(tache);
    ligne.appendChild(supp);
    inputTache.value = "";
    //Supprimer éléments
    let remove = () => {
        supp.parentNode.remove();
    }
    supp.addEventListener('click', remove);
    check.addEventListener('change', () => {
        if (check.checked) {
            ligne.classList.remove('toDo');
            ligne.classList.add('done');
            ligne.classList.add('bg-pink');
        } else if (check.checked == false) {
            ligne.classList.add('toDo');
            ligne.classList.remove('done');
            ligne.classList.remove('bg-pink');
        }
    })
    //Modifier les tâches
    let edit = document.createElement('button');
    edit.innerHTML = 'Modifier';
    edit.classList.add('mx-3');
    ligne.appendChild(edit);
    edit.addEventListener('click', ()=>{
    })
}
done.addEventListener('click', () => {
    for (let i = 0; i < tabList.length; i++) {
        if (tabList[i].classList.contains('toDo')) {
            tabList[i].classList.remove('d-flex');
            tabList[i].classList.add('d-none');
        } else {
            tabList[i].classList.add('d-flex');
            tabList[i].classList.remove('d-none');
        }
    }
})
all.addEventListener('click', () => {
    for (let i = 0; i < tabList.length; i++) {
        tabList[i].classList.remove('d-none');
        tabList[i].classList.add('d-flex');
    }
})
inputTache.addEventListener("keydown", () => {
    if (event.keyCode === 13) {
        addList();
    }
})