// Evenements de souris
// --


// Ciblage de l'element pour le clique de souris
var elementPourClique = document.getElementById('cliqueDeSouris');

// Ajoute l'ecouteur d'evenement de type "click"
elementPourClique.addEventListener('click', () => {

    alert( elementPourClique.innerHTML );

});


var elementPourSurvol = document.getElementById('survolDeSouris');

elementPourSurvol.addEventListener('mouseover', () => {
    elementPourSurvol.style = "background-color: yellow;";
});
    
elementPourSurvol.addEventListener('mouseout', () => {
    elementPourSurvol.style = "background-color: green;";
});




// Evenements de clavier
// --

