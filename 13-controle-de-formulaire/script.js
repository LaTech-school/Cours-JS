"use strict";

// Générer les champs "Date of Birth"
// --

var birthday = document.getElementById('birth_day');
var birthmonth = document.getElementById('birth_month');
var birthyear = document.getElementById('birth_year');

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
var monthes = ["janvier","février","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","décembre"];
for (let i=0; i<12; i++) 
{
    // Create d'une balise HTML
    let option = document.createElement('OPTION');

    // Ajoute de l'attribut "value" sur l'<option>
    option.setAttribute('value', (i+1));

    // Injection du texte dans l'<option> 
    option.textContent = monthes[i];

    // Inject <option> dans le <select>
    birthmonth.appendChild(option);
}

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
form.addEventListener('submit', checkForm);

// Fonction de controle du formulaire
function checkForm(event) 
{
    // Etat par defaut du formulaire
    // --
    var isValid = true;


    // Controle du form
    // --
    console.log("Envois du form");
    






    


    // Controle de l'etat du formulaire
    // --

    // Si le formulaire N'EST PAS (!) valid (TRUE)
    // Si le formulaire est FALSE
    // if (isValid == false)
    if (!isValid)
    {
        // Annule la soumission du formulaire
        // preventDefault > annule le comportement par defaut de l'evenement "submit"
        event.preventDefault();
        // equi: <form onsubmit="return false;">
    }

}