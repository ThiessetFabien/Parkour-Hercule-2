import { base } from "../js/base.js";

console.log('test 1...2...1...2');

// représenter l'entité Hercule
const Hercule = {
    // name : Hercule
    name: 'Hercule',
    // job : Demi-dieu
    job: 'Demi-dieu',
    // age : 35ans
    age: 35,
    // department : 75
    department: 75,
    // arm : 60.5
    arm: 60.5,
    // inRelationship : Yes
    inRelationship: 'Yes',
};

//met en argument le profil d'hercule dans fillProfil
base.fillProfil(Hercule);

// crée un tableau qui contient les noms des 4 amis d'hercule
const HerculeFriends = [
    'Jupiter',
    'Junon',
    'Alcmène',
    'Déjanire',
];

// utiliser la méthode printFriends (dans base), attend un tableau en argument
// exécute là, passe ton tableau 
base.printFriends(HerculeFriends);

// méthode pour afficher le meilleur ami (dans base)
// exécute là, passe la première valeur de ton tableau
base.setBestFriend(HerculeFriends[0]);



// git commit -m "feed/"