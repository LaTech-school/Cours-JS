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
var decimal = 21.5;
console.log(typeof decimal, decimal);

var number2 = "42"; // NOT A NUMBER
console.log(typeof number2, number2);

console.log("42 x '42' = ", 42*'42');
console.log("42 x 'a42' = ", 42*'a42');
console.log("42 x number1 = ", 42*number1);



// boolean - bool
// --
var bool1 = true; // Vrai
var bool2 = false; // Faux
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
console.log(typeof array3[0], array3[0]);



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



// Les données sont dynamiques
// --
var x; // Undefined
console.log(typeof x, x);

x = 42; // Number
console.log(typeof x, x);

x = "Sponge Bob"; // String
console.log(typeof x, x);

x = undefined; // Undefined
console.log(typeof x, x);



// (undefined) - Valeur non définie
// --

var y;
var z = undefined;

console.log(y);
console.log(z);



// (Null) - Nule
// --

var a;
var b = null;

console.log(typeof a, a);
console.log(typeof b, b);
console.log(null == undefined);
console.log(null === undefined);



// (empty) - valeur de chaine vide
// --

var c = "";

console.log(typeof c, c);
console.log(c == null);
console.log(c == undefined);