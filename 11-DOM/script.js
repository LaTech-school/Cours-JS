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

// Ciblage d'un element HTML par sont ID
var mainHeader = document.getElementById('main-header');

// Debug du type du contenu du noeud HTML
console.log(typeof mainHeader);

// Debug du contenu du noeud HTML
console.log(mainHeader);

// Debug du contenu HTML du noeud HTML
console.log(mainHeader.innerHTML);

// Modification du contenu du noeud HTML
mainHeader.innerHTML = "<strong>Hello</strong> World";

// Debug du contenu HTML du noeud HTML
console.log(mainHeader.innerHTML);