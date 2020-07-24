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

// Déclaration de la fonction contenant la procédure
function start() {
    
    // Le message de la premiere boite de dialogue
    // --

    // Début du message
    let message = "Nos pizzas :\n\n";

    // Boucle sur la liste des pizzas pour générer la chaine
    pizzas.forEach(pizza => {
        message += `- ${pizza.name} (${pizza.price} €)\n`;
    });

    

    // Affichage de la premiere boite de dialogue
    // --

    // Affiche le message puis récupère la valeur saisie.
    var pizzaName = prompt(message);
    // console.log( pizzaName );


    // Test l'existance de la pizza
    // --

    // On considère (pour le moment) que la pizza n'existe pas
    var pizzaExists = false;

    // on prépare l'objet de la pizza selectionner pour afficher les infos
    var selectedPizza;
    
    // Boucle sur la liste des pizzas pour tester l'existance de la pizza
    pizzas.forEach(pizza => {
        
        // Pour chaque pizza de la liste, on test si le nom correspond a la valeur saisie
        if (pizza.name == pizzaName) 
        {
            // Si il y a correspondance...
            
            // On modifie la valeur de pizzaExist pour dire que "Oui" la pizza existe.
            pizzaExists = true;

            // On renseigne les propriétés de selectedPizza avec les valeur de la pizza selectionné
            // selectedPizza = {
            //     name: pizza.name, 
            //     price: pizza.price
            // };
            selectedPizza = pizza;
        }

    });




    // Affichage de la seconde boite de dialogue
    // --

    if (pizzaExists)
    {
        alert(`votre pizza est "${selectedPizza.name}" à ${selectedPizza.price} €`);
    }
    else 
    {
        alert(`La pizza "${pizzaName}" n'existe pas.`);
        start();
    }
}

// Appel de la fonction au chargement de la page
start();