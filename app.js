//DOM
const touches = [...document.querySelectorAll('.bouton')];
const listeKeycode = touches.map(function(touche){return touche.dataset.key});	//(touche => touche.dataset.key) -- autre façon d'écrir la "function"
const ecran = document.querySelector('.ecran');

document.addEventListener('keydown', function(e){
	const valeur = e.keyCode.toString();	//On récupère le "keyCode". "toString()" renvoie une chaîne de caractères
	calculer(valeur)
});


document.addEventListener('click', function(e){
	const valeur = e.target.dataset.key;
	calculer(valeur)
});


const calculer = (valeur) => {
	if(listeKeycode.includes(valeur)){
		switch (valeur){
			case '8':
				ecran.textContent = "";
				break;
			case '13':
				const calcul = eval(ecran.textContent);
				ecran.textContent = calcul;
				break;
			default:
			const indexKeycode = listeKeycode.indexOf(valeur);
			const touche = touches[indexKeycode];
			ecran.textContent += touche.innerHTML;
		}
	}
}


window.addEventListener('error', function(e){
	alert('une erreur est survenue dans votre calcule : ' + e.message);
})