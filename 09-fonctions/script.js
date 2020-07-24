// Les fonctions

// Déclarer une fonction avec le mot clé "function"
// Suivi du nom de la fonction (meme régles de nomage que pour les variables)
// Suivi de parenthèses et accolades

// Function Native
// --
// Existent dans le coeur de JS

// Function Utilisateur
// --
// Créées par le dévelopeur pour étendre les fonctionnalités de base de JS

// // Fonction simple :
// function sayHello() {
//     // code à exécuter
//     alert("Hello");
// }

// // Appel de fonction
// sayHello();


// // Fonction avec paramètre
// function sayHello(name) {
//     alert(`Hello ${name}`);
// }
// sayHello("Bobby");
// sayHello();
// sayHello("Bruce");
// sayHello("Trillian");


// // Fonction avec paramètre(s) facultatif(s)
// function sayHello(name = "Personne") {
//     alert(`Hello ${name}`);
// }
// sayHello();
// sayHello("Bobby");


// // Fonction avec paramètres 
// function sayHello(firstname, lastname) {
//     alert(`Hello ${firstname} ${lastname}`);
// }
// sayHello("Bruce", "Wayne");
// sayHello("Wayne", "Bruce");

// Fonction avec paramètres 
// function setUser(age, firstname) {
//     alert(`${firstname}, age : ${age}`);
// }
// setUser("Bruce", 80);
// setUser(80, "Bruce");


// Fonction avec paramètres 
function setUser(firstname, age=20) {
    alert(`${firstname}, age : ${age}`);
}
// setUser(80, "Bruce");
setUser("Bruce", 64);


// Fonction anonyme
// --

