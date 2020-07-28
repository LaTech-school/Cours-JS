"use strict";

// Générer les champs "Date of Birth"
// --

var birthday = document.getElementById('birth_day');
var birthmonth = document.getElementById('birth_month');
var birthyear = document.getElementById('birth_year');

birthday.style = "border: 10px solid blue";
birthmonth.style = "border: 10px solid yellow";
birthyear.style = "border: 10px solid red";

// Générer le champ "birthday"
for (let i=1; i<=31; i++) 
{
    // Create d'une balise HTML
    let option = document.createElement('OPTION');

    // Ajoute de l'attribut "value" sur l'<option>
    option.setAttribute('value', i);

    // Injection du texte dans l'<option> avec un zero qui précède l'unité
    option.textContent = (i <= 9) ? "0"+i : i;

    // Inject <option> dans le <select>
    birthday.appendChild(option);
}


// Générer le champ "birthmonth"



// Générer le champ "birthyear"
var date = new Date;
for (let i=date.getFullYear(); i >= date.getFullYear() - 100; i--) 
{
    // Create d'une balise HTML
    let option = document.createElement('OPTION');

    // Ajoute de l'attribut "value" sur l'<option>
    option.setAttribute('value', i);

    // Injection du texte dans l'<option>
    option.textContent = i;

    // Inject <option> dans le <select>
    birthyear.appendChild(option);
}







// Controle du formulaire
// --

// Ciblage du <form> + stockage dans la variable "form"
var form = document.getElementsByTagName('FORM')[0];

// Ecoute l'evenement de soumission du formulaire
form.addEventListener('submit', event => {

    console.log("Envois du form");

    // Annule la soumission du formulaire
    // preventDefault > annule le comportement par defaut de l'evenement "submit"
    event.preventDefault();
    // equi: <form onsubmit="return false;">
});
