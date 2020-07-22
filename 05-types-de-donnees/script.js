// Types de données

// (string) Chaine de caractères
// --
var string1 = "Ceci est une chaine de caractères";
console.log(typeof string1, string1);

var string2 = 'Ceci est une chaine de caractères';
console.log(typeof string2, string2);



// (number) Les nombres
// --
var number1 = 42;
console.log(typeof number1, number1);

var number2 = "42"; // NOT A NUMBER
console.log(typeof number2, number2);

console.log("42 x '42' = ", 42*'42');
console.log("42 x 'a42' = ", 42*'a42');
console.log("42 x number1 = ", 42*number1);



// boolean - bool
// --
var bool1 = true;
var bool2 = false;
console.log(typeof bool1, bool1);
console.log(typeof bool2, bool2);



// (array) - Les tableaux
// --
// Un tableau est une collection de données
var array1 = new Array();
var array2 = [];
console.log(typeof array1, array1);
console.log(typeof array2, array2);

var array3 = ["Pommes", "Poires", "Bananes"];
console.log(typeof array3, array3);

// Lire une ligne d'un tableau
console.log(typeof array3[1], array3[1]);



// (object) - Les objets
// --
var object1 = new Object();
var object2 = {};
console.log(typeof object1, object1);
console.log(typeof object2, object2);

var object3 = {
    firstname: "Bruce",
    lastname: "WAYNE",
    age: 80,
};
console.log(typeof object3, object3);

// Lire une ligne d'un objet
console.log(typeof object3.firstname, object3.firstname);