// Les Boucles
// --
// Pourquoi ? 
// -> pour executer du code de façon réptitif !
// -> pour parcourir un tableau ou un objet

// Boucle : While
// Execute du code tant que la condition est vérifiée

// // Initialisation de bouclage
// var i = 0;
// while (i < 10) // condition de bouclage
// {
//     console.log(i);

//     // Incrémentation de boucle
//     // ++i;
//     i = i + 1;
// }



// Boucle : Do While
// Execute au moins une fois le code avant de tester la condition de bouclage

// // Initialisation de bouclage
// var i = 0;
// // Execute au moins une fois le code
// do {
//     console.log(i);
//     i++; // Incrémentation de boucle
// } while (i < 10)



// Boucle : For
// Execute du code tant que la condition est vérifiée

// Syntaxe :
// for ( initialisation ; condition ; incrémentation ) {
//     // code à exécuter
// }

// for (let i=0 ; i < 10 ; i++) 
// {
//     console.log(i);
// }




// var fruits = [
//     /* 0 */ "Pommes", 
//     /* 1 */ "Poires", 
//     /* 2 */ "Bananes"
// ];

// console.log( fruits.length );

// // console.log( fruits[0] );
// // console.log( fruits[1] );
// // console.log( fruits[2] );

// for (let i=0; i < fruits.length; i++ )
// {
//     console.log( fruits[i] );
// }





// Boucle : For Of
// for (let item of array) {}

// var fruits = [
//     /* 0 */ "Pommes", 
//     /* 1 */ "Poires", 
//     /* 2 */ "Bananes"
// ];

// for (let fruit of fruits) 
// {
//     console.log( fruit );
// }



// Boucle : For In
// for (let property in object) {}
var hero = {
    name: "Batman",
    firstname: "Bruce",
    lastname: "WAYNE",
    age: 80,
    powers: [
        "money",
        "belt"
    ]
};

// for (let line in hero) 
// {
//     // console.log( line ); // affiche le nom de la clé / propriété
//     // console.log( hero[line] ); // affiche la valeur d'une propriété de l'objet
//     // console.log( line + " : " + hero[line] );
//     console.log( `${line} : ${hero[line]}` );
// }



