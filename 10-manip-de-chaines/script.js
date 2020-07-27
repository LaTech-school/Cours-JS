// Manipulation de chaines de caractères

var str = "J'aime les chats et les chatons, chats... chat, Chat, chat, chat";

// Affichage simple
console.log( str );

// Mettre une chaine en majuscule
console.log( str.toUpperCase() );

// Ajouter des espaces a droite et a gauche de la chaine
str = "        "+str+"        ";
console.log( str );
console.log( str.trim() );

str = str.trim();

// Remplacer une portion de chaine
console.log( str.replace("chat", "chien") ); // "J'aime les chiens et les chatons"
console.log( str.replace("chat", "chien").replace("chat", "chien") ); // "J'aime les chiens et les chienons"

var regex = /chat/g;
var found = str.match(regex);

console.log(found);

for (let i=0; i<found.length; i++) {
    str = str.replace("chat", "chien");
}

console.log( str );