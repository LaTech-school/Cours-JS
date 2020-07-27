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
// console.log(mainTitle[0]);

// Modification du contenu HTML de la premiere classe .main-title
var mainTitle = document.getElementsByClassName('main-title');
// console.log(typeof mainTitle);
// console.log(mainTitle);
// console.log(mainTitle[0]);

// Condition pour executer le innerHTML si mainTitle[0] n'est pas undefined
if (mainTitle[0] != undefined)
{
    mainTitle[0].innerHTML = "C'est la pause !!!";
    mainTitle[0].style = "color: red";
}

var allDivs = document.getElementsByTagName('DIV');
// console.log(allDivs);

var allParagraphes = document.getElementsByTagName('P');
console.log(allParagraphes);

for (let i=0; i < allParagraphes.length; i++) 
{
    console.log( allParagraphes[i] );
    allParagraphes[i].style = "border: 10px dotted red";
}





// Résumé

// Ciblage d'un element HTML par son ID
// <div id="main-header">

// Retourne un noeud HTML 
// ex: <div id="main-header">...</div>
document.getElementById('main-header');



// Ciblage d'elements HTML par nom de class
// <div class="main-title">

// Retourne une liste de noeuds HTML 
// ex : array(
//      "<div class=main-title>...</div>", 
//      "<h1 class=main-title>...</h1>"
// )
document.getElementsByClassName('main-title');





// Ciblage d'elements HTML par nom de balise / Tag
// <div>

// Retourne une liste de noeuds HTML 
// ex : array(
//      "<div>...</div>", 
//      "<div>...</div>"
// )
document.getElementsByTagName('DIV');
// <section>
document.getElementsByTagName('SECTION');

