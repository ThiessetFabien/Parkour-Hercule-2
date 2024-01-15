import { base } from "../js/base.js";

console.log("test 1...2...1...2");

const app = {
  // représenter l'entité Hercule
  Hercule: {
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
    // crée un tableau qui contient les noms des 4 amis d'hercule
    friends: ["Jupiter", "Junon", "Alcmène", "Déjanire"],
  },
  // créer un titre dans ma page
  // balise h1
  title: {
    create: document.createElement("h1"),
    // ajoute un classe "banner__title"
    // écris dedans "Vous consultez le profil de Hercule"
    // insère la dans l'élement avec l'id "header-banner"
    appendToHeaderBanner() {
      this.create.classList.add("banner__title");
      this.create.textContent = "Vous consultez le profil de Hercule";
      document.getElementById("header-banner").appendChild(app.title.create);
    },
  },
  // AFFICHER TOUS LES TRAVAUX
  // la méthode "displayWork" (de l'objet base) affiche 1 travail à la fois
  // elle prend un paramètre
  loopWork() {
    // boucle qui itère de 0 à 11
    for (let i = 0; i < 11; i++) {
      // appeler à chaque fois displayWork
      base.displayWork([i]);
    }
  },

  availability() {
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
  },
  // CREER UNE FONCTION POUR GENERER UN PSEUDO,
  // QUI RECOIT 2 PARAMETRES (un prénom, un numéro de département)
  generatePseudo(name, department) {
    // execute ta fonction en lui passant le prénom hercule et son numéro de département (étape2)
    name = this.Hercule.name;
    department = this.Hercule.department;
    let pseudo = `${name}-du-${department}`;
    // ta fonction retourne le pseudo type Prénom-du-NuméroDeDépartement
    return pseudo;
  },
  pseudoInHtml() {
    // Utilise la valeur récupéré de genenatePseudo
    // pour écrire le pseudo dans l'élément à l'id "profil-name"
    let pseudoContainer = document.getElementById("profil-name");
    pseudoContainer.textContent += ` (${app.generatePseudo()})`;

    // écoute l'évènement clock sur l'élément avec l'id "menu-toggler"
    const togglerButton = document.getElementById("menu-toggler");
    togglerButton.addEventListener("click", () => {
      // tu dois l'ajouter ou la retirer sur l'élément à l'id "header-banner":
      //      quand click et que "header-banner" a déjà la classe "banner--open"
      //      quand click et que "header-banner" n'a pas la classe "banner--open"
    document.getElementById('header-banner').classList.toggle("banner--open");
    });

    document.addEventListener("DOMContentLoaded", () => {
      //  à la soumission du formulaire à l'id "contact"
      let contactForm = document.getElementById("contact");

      contactForm.addEventListener("submit", (event) => {
        //  je ne veux pas que la page s'actualise
        event.preventDefault();
        alert("Hercule ne souhaite pas être dérangé");
      });
      // à la place, afficher une boîte de dialoque en alerte qui dit "Hercule ne souhaite pas être dérangé"
    });
  },

  votePercentage() {
    // nb votes de chacun => propriété "vote" de l'objet "base"
    let valeurTotal = base.vote.hercule + base.vote.cesar;
    // la formule de calcule : valeurRelative / valeurTotale * 100
    let votePercentageHercule = Math.round(
      (base.vote.hercule / valeurTotal) * 100
    );
    let votePercentageCesar = Math.round((base.vote.cesar / valeurTotal) * 100);
    // affiche tes calculs dans 2 éléments de classe "people__popularity"
  
    // présent pour Hercule dans l'élément à l'id #trends-hercule
    let percentageContainerHercule =
      document.getElementsByClassName("people__popularity")[0];
    percentageContainerHercule.textContent = `${votePercentageHercule}%`;
  
    // donner une largeur aux 2 éléments de classe "people__bar", si on utilise le pourcentage calculé comme largeur, ça devrait être chouette
    let percentageBarHercule = document.getElementsByClassName("people__bar")[0];
    percentageBarHercule.style.height = `${votePercentageHercule}%`;
  
    // et pour César dans l'élément à l'id #trends-cesar
  
    let percentageContainerCesar =
    document.getElementsByClassName("people__popularity")[1];
    percentageContainerCesar.textContent = `${votePercentageCesar}%`;
  
    let percentageBarCesar = document.getElementsByClassName("people__bar")[1];
    percentageBarCesar.style.height = `${votePercentageCesar}%`;
  },
  // ALGO
  // on veut afficher le pourcentage de votes pour Hercule & César sur la droite
  init() {
    this.loopWork();
    this.availability();
    this.generatePseudo();
    this.votePercentage();
    this.pseudoInHtml();
  
    //met en argument le profil d'hercule dans fillProfil
    base.fillProfil(app.Hercule);
  
    // utiliser la méthode printFriends (dans base), attend un tableau en argument
    // exécute là, passe ton tableau
    base.printFriends(app.Hercule.friends);
  
    // méthode pour afficher le meilleur ami (dans base)
    // exécute là, passe la première valeur de ton tableau
    base.setBestFriend(app.Hercule.friends[0]);
  
    this.title.appendToHeaderBanner();
  },
};

app.init();