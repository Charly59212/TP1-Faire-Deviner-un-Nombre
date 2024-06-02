//Génération du nombre aléatoire
let NombreAleatoire = Math.floor(Math.random() * 100) + 1;

//Compteur nombre d'essais
let compteur = 1;

//Variables de Résultats
const suppose = document.querySelector('.suppose');
const resultat = document.querySelector('.resultat');
const nombreVerif = document.querySelector('.nombreVerif');

//Nombres saisis par le joueur
const supposeSubmit = document.querySelector('.supposeSubmit');
const SupposeNombre = document.querySelector('.SupposeNombre');

//Bouton rejouer
let newGame;

//Fonction de vérification du nombre saisi
function checkGuess() {
  const devine = Number(SupposeNombre.value);
  if (compteur === 1) {
    suppose.textContent = "Nombre d'essais : ";
  }

  //Enregistrement du nombre saisi
  suppose.textContent += devine + ' ';

  //Conditions de vérification
  if (devine === NombreAleatoire) {
    resultat.textContent = 'Bravo ! Vous avez gagné !';
    nombreVerif.textContent = '';
    setGameOver();
  } else if (compteur === 10) {
    resultat.textContent = '!!! PERDU !!!';
    nombreVerif.textContent = '';
    setGameOver();
  } else {
    resultat.textContent = 'Faux !';
    if (devine < NombreAleatoire) {
      nombreVerif.textContent = 'Nombre trop bas ! Essayez à nouveau.';
    } else if (devine > NombreAleatoire) {
      nombreVerif.textContent = 'Nombre trop élevé ! Essayez à nouveau.';
    }
  }

  //Nouvel essai
  compteur++;
  SupposeNombre.value = '';
  SupposeNombre.focus();
}

//Ecouteur d'événement au clic
supposeSubmit.addEventListener('click', checkGuess);


//Fin de Partie
function setGameOver() {
  SupposeNombre.disabled = true;
  supposeSubmit.disabled = true;
  newGame = document.createElement('button');
  newGame.textContent = 'Nouvelle Partie';
  document.body.appendChild(newGame);
  newGame.addEventListener('click', nouvellePartie);
}

//Nouvelle Partie

function nouvellePartie() {
  //remet le compteur à zéro
  compteur = 1;
  //Supprime toutes les infos enregistrées
  const resetParas = document.querySelectorAll('.calcul p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }

  //Supprime le bouton nouvelle partie
  newGame.parentNode.removeChild(newGame);

  //Réinitialisation du formulaire
  SupposeNombre.disabled = false;
  supposeSubmit.disabled = false;
  SupposeNombre.value = '';
  SupposeNombre.focus();

  //Nouveau nombre aléatoire
  NombreAleatoire = Math.floor(Math.random() * 100) + 1;
}