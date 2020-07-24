
// Déclaration de l'objet "user" dans lequel seront stockés les infos de l'utilisateur
var user = {
    firstname: null,
    lastname: null,
};

// Déclaration du tableau "cart" dans lequel seront stockés les produits du panier
var cart = [];

// Déclaration de la liste des pizzas
var pizzas = [
    {
        name: "reine",
        price: 8.99
    },
    {
        name: "4 fromages",
        price: 9.99
    },
    {
        name: "hawaienne",
        price: 10.50
    },
    {
        name: "montagnarde",
        price: 12
    },
];


// Start
function start() {
    welcome();
    getFisrtname();
}

// Welcome message
function welcome() {
    alert("Bienvenu à la PizzaYolo !\nCommençons par faire connaissance.");
}

function getFisrtname()
{
    let firstname = prompt("Quel est votre prénom ?");

    // user click "cancel"
    if (firstname == null)
    {
        return;
    }

    // user clik "ok"
    if (firstname.length) {
        user.firstname = firstname;
    }
    else {
        alert("Désolé, je n'ai pas compris");
        getFisrtname();
    }
}