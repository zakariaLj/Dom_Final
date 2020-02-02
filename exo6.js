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

// let Buttons = document.querySelectorAll('calculette');
// let input = document.getElementById('textvu');
// let btn7= document.getElementById('btn7')


// let Affiche = ()=>{
//  input.innerHTML = Buttons.value;
// }

// Buttons.addEventListener('click',Affiche)







/* In the editor this pen don't work, because i have some problem with the "eval" function */

// Obtenir les touches du documents
var touches = document.querySelectorAll('#calculette span');

// Initialisation d'un tableau d'opérateurs.
var operateurs = ['/', 'x', '-', '+'];

// Flag : Une décimale a été ajoutée?
var decimaleAjoute = false;

/* 
 * Ajout dynamique d'une fonction sur les touches : 
 * - Un évênement on click sur toutes les touches qui permettra d'éfféctuer les opérations. 
 */
for(var i = 0; i < touches.length; i++) {
	touches[i].onclick = function(e) {
	
		// 1) Obtenir les valeurs des boutons et de l'écran.
		var ecran = document.querySelector('.ecran');
		var valeurEcran = ecran.innerHTML;
		var valeurBouton = this.innerHTML;
    
		// 2) Traitement des différents boutons et évaluation finale.
		
		// Touche "reset".
		if(valeurBouton == 'C') {
			
			// Reset écran et reset flag decimale.
			ecran.innerHTML = '';
			decimaleAjoute = false;
		
		// Touche "=".
		} else	if(valeurBouton == '=') {
      			
			// Initialisation de la variable de calcul par rapport
			// à l'affichage à l'écran.
			var calcul = valeurEcran;
			
			// Obtention du dernier caractère.
			var dernierCaractere = valeurEcran[valeurEcran.length - 1];
			
			// Dans notre variable de calcul : Remplacement de "x" par "*".
			calcul = calcul.replace(/x/g, '*');
			
			// Si le calcul se termine par un "." ou un opérateur, on enlève 
			// cet opérateur.
			if(operateurs.indexOf(dernierCaractere) > -1 
			|| dernierCaractere == '.') {
				calcul = calcul.replace(/.$/, '');
			}
			// Si il y a un calcul : utilisation de Eval pour que l'écran 
			// change de valeur.
      
			if(calcul) {
				ecran.innerHTML = eval(calcul);
			}
			decimaleAjoute = false;

		} else if (operateurs.indexOf(valeurBouton) > -1) {		 
			
			/* 
			 * Il reste quelques problèmes : 
			 * 1. Le calcul avec deux opérateurs successifs doivent être 
			 * interdits.
			 * 2. Le calcul ne peut pas commencer par un opérateur, mis
			 * à part un "-".
			 * 3. Le calcul avec plus d'une décimale doit être interdit.
			 */
			 
			// Obtention du dernier caractère de l'écran.
			var dernierCaractere = valeurEcran[valeurEcran.length - 1];
			
			// Ajout de l'opérateur seulement si l'écran n'a pas d'opérateur
			// comme dernier caractère.
			
			// Reset l'écran si l'écran vaut "-" et qu'on presse "+".
			if (valeurEcran == '-' 
			&& valeurBouton == '+') {
				ecran.innerHTML = '';
			} 
			// Ajout "-" si l'écran est vide et qu'on presse "-".
			else if (valeurEcran == ''
			&& valeurBouton == '-') {				
				ecran.innerHTML = valeurBouton;
			} 
			// Si il y a quelque chose dans l'écran et que ce n'est pas -
			else if (valeurEcran != '' 
			&& operateurs.indexOf(dernierCaractere) == -1) {
				ecran.innerHTML += valeurBouton;
			}
			
			// Si un opérateur existait déja à la fin, alors on le remplace
			// par le nouveau.
			if (operateurs.indexOf(dernierCaractere) > -1 
			&& valeurEcran.length > 1) {
			
				// Ici, '.$' signifie la fin de  la chaine de caractère,
				// donc n'importe quel caractère (qui sera un opérateur)
				// a la fin de l'écran vas être remplacé par le nouveau 
				// opérateur.
				ecran.innerHTML = valeurEcran.replace(/.$/, valeurBouton);
			}
			
			decimaleAjoute =false;
		
		} else if (valeurBouton == '.') {
		
			// maintenant, seulement le problème de décimale est restant. Nous
			// le resolvons en utilisant un flag quand la décimale est déja 
			// ajouté. Il sera reset quand un "=" or reset sera préssé.
			if(!decimaleAjoute) {
				ecran.innerHTML += valeurBouton;
				decimaleAjoute = true;
			}
		} else {
      
			// Si c'est une autre touche que égal, ajout à la suite de l'écran.		
			ecran.innerHTML += valeurBouton;
		}
		
		// Prevent page jumps
		e.preventDefault();
	} 
}