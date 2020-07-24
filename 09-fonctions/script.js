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


// // Fonction avec paramètres 
// function setUser(firstname, age=20) {
//     alert(`${firstname}, age : ${age}`);
// }
// // setUser(80, "Bruce");
// setUser("Bruce", 64);


// Fonction anonyme
// --

// var divide = function(numerator, denominator) {
//     alert( numerator / denominator );
// }

// divide(10, 5);

// setTimeout( function(){
//     alert("5 secondes de perdues !!");
// } , 5000 );


// function sayYep(param="truc") {
//     alert("YEP !!! " + param);
// } 

// // setTimeout( function(){
// //     sayYep();
// // } , 5000 );

// setTimeout( sayYep , 5000 );
// sayYep("machin");





// Fonction Fléchée
// --

// var divide = (numerator, denominator) => {
//     alert( numerator / denominator );
// }



// Sortie de fonction
// --
// mot clé "return"

// var divide = (numerator, denominator) => {
//     // alert( numerator / denominator );
//     return ( numerator / denominator );
// }

// // var result = 10 /5;
// // console.log( result );
// console.log( divide(10,5) );


function remplirBaignoir(contenu="rien") {
    return "On rempli la baignoir avec "+ contenu;
}
document.getElementById("baignoir").innerHTML = remplirBaignoir("de l'eau");

// remplirBaignoir(); //  "On rempli la baignoir avec rien"
// console.log( remplirBaignoir("de l'eau") ); // "On rempli la baignoir avec de l'eau"
// console.log( "On rempli la baignoir avec de l'eau" );

// remplirBaignoir("des billets"); // "On rempli la baignoir avec des billets"