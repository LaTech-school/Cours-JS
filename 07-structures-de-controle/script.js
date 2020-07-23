// Structures de contôle

// Condition "if" (si...)
// --
// Syntaxe:     if (a) { ... }

// var a = 5;

// if (a > 5) {
//     alert('Variable "a" supérieure a 5');
// }
// if (a > 15) {
//     alert('Variable "a" supérieure a 15');
// }

// // if (!true) {
// //     alert("Oui c'est faux !");
// // }

// // console.log( true );
// // console.log( false );
// // console.log( !true );
// // console.log( !false );
// // console.log( !0 );
// // console.log( !(!0) == false );

// // Afficher un message si a est supérieur ou égale à 10
// // Afficher un autre message si a est inférieur à 10
// if (a >= 10) {
//     alert("Supérieur ou égale à 10");
// }
// if (a < 10) {
//     alert("Inférieur à 10");
// }

// // Condition "if..else" (si...sinon)
// // --
// // Syntaxe:     if (a) { ... } else { ... }
// if (a >= 10) {
//     alert("Supérieur ou égale à 10");
// }
// else // if (a < 10) 
// {
//     alert("Inférieur à 10");
// }

// var age = 15;

// if (age >= 18) {
//     // adulte
// }
// if (age < 13) {
//     // Enfant
// }

// if (age >= 18) {
//     // adulte
// }
// else {
//     // pas adulte
// }


var gender = "O";
var genderName;

if (gender == "M") {
    genderName = "Masculin";
}
else {
    genderName = "Feminin";
}

console.log(genderName);




// var age = 10;

// if (age >= 18) {
//     console.log("Adulte");
// }
// if (age < 18) {
//     console.log("Ado");
// }
// if (age < 13) {
//     console.log("Enfant");
// }


// Condition "if..else if ... else" (si...sinon si .... sinon)

// var age = 15;
// if (age >= 18) {
//     console.log("Adulte");
// } 
// else if (age < 13) {
//     console.log("Enfant");
// }
// else {
//     console.log("Ado");
// }

// if ... else if ... else
// Tester et afficher si Bobby est un garçon (boy) ou une fille (girl) sinon... bobby est  une licorne

var bobby = "alien";

if ( bobby == "boy" ) {
    console.log("Garçon");
}
else if (bobby == "girl") {
    console.log("Fille");
}
else {
    console.log("Licorne");
}


// Instruction Switch
switch (bobby) {
    case 'boy':
        console.log("Garçon");
    break;
    case 'girl':
        console.log("Fille");
    break;
    default:
        console.log("Licorne");
}