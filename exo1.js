let Exo1 = document.getElementById("exo1");
let Section2 = document.getElementById("section2")

let goToExo1 = () => {
    Section2.innerHTML = `        
    <div id="exo-1">
    <h2>
        Mon titre principale
    </h2>
    <p>liste des propriétés et methode sa retrouver dans la documentation</p>
    <ul>
        <li>innerText</li>
        <li>innerHTML</li>
        <li>querySelector()</li>
        <li>QuerySelectorAll()</li>
        <li>Style</li>
        <li>classList</li>
    </ul>
    <p>Changer le contenu de h2 par" le titre modifié" <br>
    changer la couleyr de h2(la  couleur que vous voulez ajouter sera une classe bootstrap</p>
</div>`
}

Exo1.addEventListener('mouseover',goToExo1);

let changeTitel = ()=>{
    
}