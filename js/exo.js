import { base } from "../js/base.js";

console.log("test 1...2...1...2");

// représenter l'entité Hercule
const Hercule = {
  // name : Hercule
  name: "Hercule",
  // job : Demi-dieu
  job: "Demi-dieu",
  // age : 35ans
  age: 35,
  // department : 75
  department: 75,
  // arm : 60.5
  arm: 60.5,
  // inRelationship : Yes
  inRelationship: "Yes",
};

//met en argument le profil d'hercule dans fillProfil
base.fillProfil(Hercule);

// crée un tableau qui contient les noms des 4 amis d'hercule
const HerculeFriends = ["Jupiter", "Junon", "Alcmène", "Déjanire"];

// utiliser la méthode printFriends (dans base), attend un tableau en argument
// exécute là, passe ton tableau
base.printFriends(HerculeFriends);

// méthode pour afficher le meilleur ami (dans base)
// exécute là, passe la première valeur de ton tableau
base.setBestFriend(HerculeFriends[0]);

// créer un titre dans ma page
// balise h1
const titleContainer = document.createElement("h1");
// ajoute un classe "banner__title"
titleContainer.classList.add("banner__title");
// écris dedans "Vous consultez le profil de Hercule"
titleContainer.textContent = "Vous consultez le profil de Hercule";
// insère la dans l'élement avec l'id "header-banner"
const headerBanner = document.getElementById("header-banner");
headerBanner.appendChild(titleContainer);

// AFFICHER TOUS LES TRAVAUX
// la méthode "displayWork" (de l'objet base) affiche 1 travail à la fois
// elle prend un paramètre

// boucle qui itère de 0 à 11
for (let i = 0; i < 11; i++) {
  // appeler à chaque fois displayWork
  base.displayWork([i]);
}

// AFFICHER LA DISPO D'HERCULE SUIVANT L'HEURE QU'IL EST

// entre 8h & 20h
// Utilise getHour (de base) pour connaître l'heure qu'il est
let availabilityContainer = document.getElementById("availability");

if (base.getHour() > 8 && base.getHour() < 20) {
  // hercule est Disponible
  // afficher l'information de disponibilité dans l'élement à l'id availability
  availabilityContainer.classList.remove("off");
  availabilityContainer.textContent = "Disponible";
} else {
  // sinon Non disponible
  // ajoutes y la class off lorsque Hercule est non disponible (pastille rouge)
  availabilityContainer.classList.add("off");
  availabilityContainer.textContent = "Non disponible";
}

// CREER UNE FONCTION POUR GENERER UN PSEUDO,
// QUI RECOIT 2 PARAMETRES (un prénom, un numéro de département)
function generatePseudo(name, department) {
  // execute ta fonction en lui passant le prénom hercule et son numéro de département (étape2)
  name = Hercule.name;
  department = Hercule.department;
  let pseudo = `${name}-du-${department}`;
  // ta fonction retourne le pseudo type Prénom-du-NuméroDeDépartement
  return pseudo;
}

generatePseudo();
console.log(generatePseudo());

// Utilise la valeur récupéré de genenatePseudo
// pour écrire le pseudo dans l'élément à l'id "profil-name"
let pseudoContainer = document.getElementById("profil-name");
pseudoContainer.textContent += ` (${generatePseudo()})`;

// écoute l'évènement clock sur l'élément avec l'id "menu-toggler"
const togglerButton = document.getElementById("menu-toggler");
togglerButton.addEventListener("click", function () {
  // tu dois l'ajouter ou la retirer sur l'élément à l'id "header-banner":
  //      quand click et que "header-banner" a déjà la classe "banner--open"
  //      quand click et que "header-banner" n'a pas la classe "banner--open"
  headerBanner.classList.toggle("banner--open");
});

document.addEventListener("DOMContentLoaded", function () {
  //  à la soumission du formulaire à l'id "contact"
  let contactForm = document.getElementById("contact");

  contactForm.addEventListener("submit", function (event) {
    //  je ne veux pas que la page s'actualise
    event.preventDefault();
    alert("Hercule ne souhaite pas être dérangé");
  });
  // à la place, afficher une boîte de dialoque en alerte qui dit "Hercule ne souhaite pas être dérangé"
});

// ALGO
// on veut afficher le pourcentage de votes pour Hercule & César sur la droite
function votePercentage() {
  // nb votes de chacun => propriété "vote" de l'objet "base"
  const valeurTotal = base.vote.hercule + base.vote.cesar;
  // la formule de calcule : valeurRelative / valeurTotale * 100
  const votePercentageHercule = Math.round((base.vote.hercule / valeurTotal) * 100);
  const votePercentageCesar = Math.round((base.vote.cesar / valeurTotal) * 100);
  // affiche tes calculs dans 2 éléments de classe "people__popularity"

  // présent pour Hercule dans l'élément à l'id #trends-hercule
  let percentageContainerHercule = document.getElementsByClassName("people__popularity")[0];
  percentageContainerHercule.textContent = `${votePercentageHercule}%`;

  // et pour César dans l'élément à l'id #trends-cesar
  let percentageContainerCesar = document.getElementsByClassName("people__popularity")[1];
  percentageContainerCesar.textContent = `${votePercentageCesar}%`;
}

votePercentage();
// donner une largeur aux 2 éléments de classe "people__bar", si on utilise le pourcentage calculé comme largeur, ça devrait être chouette

// git commit -m "feed/"
