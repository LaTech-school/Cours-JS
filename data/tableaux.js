// Tableau de chaines
var fruits = [
    "Pommes", 
    "Poires", 
    "Bananes"
];

// Tableau d'objets
var users = [
    // User 0
    {
        firstname: "Bruce",
        lastname: "Wayne",
    },

    // User 1
    {
        firstname: "Clark",
        lastname: "Kent",
    }
];

// Afficher Bruce
console.log( users ); // le tableau "users"
console.log( users[0] ); // index 0 du tableau users
console.log( users[0].firstname ); // propriété "firstname" de l'index 0 du tableau users

// Afficher Kent
console.log( users[1].lastname );