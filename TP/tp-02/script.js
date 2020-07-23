// TP 02

// Dire "Bienvenu, voulez vous commencer ?" via une boite de dialogue confirm
// Recupérer la réponse
var start = confirm("Bienvenu, voulez vous commencer ?");

// Si l'utilisateur dit "OK", on lui demande son prénom via une boite de dialogue prompt
if (start) {

    var name = prompt("Quel est ton nom ?");
    // Recupérer la réponse et dire "Bonjour $user" via une boite de dialogue alert
    if (name != "null") {
        alert("Bounjour "+name);

        // On demande l'age de l'utilisateur
        // Recupérer la réponse
        var age = prompt("Quel est ton age ?");

        // Si l'utilisateur a plus de 12 ans, il sera autorisé a acceder au site sinon on lui affiche un message "Tu es trop jeune, reviens plus tard !"
        if (age > 12) {
            alert("Welcome "+name);
        } else {
            alert("Tu es trop jeune, reviens plus tard !");
        }
    }
    else {
        alert("Ooops je n'ai pas compris ton nom !");
    }
    
}
else {
    alert("Ok... Bye !");
}