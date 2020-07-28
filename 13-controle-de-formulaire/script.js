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

// On considère que le formumaire est OK par defaut
var isValid = true;


// Recupération des noeuds HTML
// --

// Ciblage du <form> + stockage dans la variable "form"
var form = document.getElementsByTagName('FORM')[0];
var el_firstname = document.getElementById('firstname');
var el_lastname = document.getElementById('lastname');

// ...
// ...
// ...
// ...
// ...



// Déclencheur d'evenements
// --

// Ecoute l'evenement de soumission du formulaire
form.addEventListener('submit', checkForm);
el_firstname.addEventListener('blur', checkFirstname);
el_lastname.addEventListener('blur', checkLastname);

// ...
// ...
// ...
// ...
// ...
// ...


// Declaration des fonction de controle de données
// --

function checkFirstname() 
{
    var firstname = el_firstname.value;

    if (!/^[a-zA-Z ]+$/.test(firstname)) {
        isValid = false;
        el_firstname.style = "border: 1px solid red";
    } else {
        el_firstname.style = "border: 1px solid green";
    }
}

function checkLastname() 
{
    var lastname = el_lastname.value;

    if (!/^[a-zA-Z ]+$/.test(lastname)) {
        isValid = false;
        el_lastname.style = "border: 1px solid red";
    } else {
        el_lastname.style = "border: 1px solid green";
    }
}

// ...
// ...
// ...
// ...
// ...

// Fonction de controle du formulaire
function checkForm(event) 
{
    // Controle du form
    // --
    checkFirstname();
    checkLastname();
    // ...
    // ...
    // ...
    // ...
    // ...
    

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