// Document Object Model

// Root
// |--- HTML
//      |-- HEAD
//      |   |-- TITLE
//      |-- BODY
//          |-- HEADER
//          |-- DIV.main-content
//          |   |-- MAIN
//          |   |   |-- H1
//          |   |   |-- SECTION
//          |   |   |   |-- ARTICLE
//          |   |   |   |   |-- H2
//          |   |   |   |   |-- P
//          |   |   |   |   |-- P
//          |   |-- ASIDE
//          |-- FOOTER

var theTitle = "Document Object Model";
document.title = theTitle;

// Ciblage d'un element HTML par son ID
var mainHeader = document.getElementById('main-header');

// Debug du type du contenu du noeud HTML
// console.log(typeof mainHeader);

// Debug du contenu du noeud HTML
// console.log(mainHeader);

// Debug du contenu HTML du noeud HTML
// console.log(mainHeader.innerHTML);

// Modification du contenu du noeud HTML
mainHeader.innerHTML = "<strong>Hello</strong> World";

// Debug du contenu HTML du noeud HTML
// console.log(mainHeader.innerHTML);


// Ciblage d'elements HTML par nom de class
var mainTitle = document.getElementsByClassName('main-title');

// /!\ mainTitle est une liste, un tableau de noeuds HTML
// mainTitle doit être parcouru comme un tableau

var mainHeader = document.getElementById('main-header');

// Debug de la liste des noeuds HTML
// console.log(mainHeader);

// Debug du contenu HTML du noeud à l'index O du tableau mainTitle
console.log(mainTitle[0]);
