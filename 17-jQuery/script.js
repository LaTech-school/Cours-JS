// Demo
// --

var enfants = document.getElementsByClassName('enfant');
var enfant_1 = enfants[0];
enfant_1.innerHTML = "Ainé";

$('.enfant').first().html("Hello");


// $('.enfant')                         = document.getElementsByClassName('enfant');
// $('.enfant').first()                 = enfants[0];
// $('.enfant').first().html("Hello");  = enfant_1.innerHTML = "Hello";



// Syntaxe
// --

// Faire appel à la librairie jQuery
// ex: jQuery
// ex: jquery
// ex: $

// Ciblage d'un element
// ex: $(selecteur)
// ex: $('#id')                 selecteur d'id
// ex: $('.class')              selecteur de classe
// ex: $('div')                 selecteur de type
// ex: $('[name=firstname]')    selecteur d'attribut
// ex: $(document)              selecteur d'objet


// Passage d'action
// Getter : $(seleteur).action();
// Setter : $(seleteur).action(quelque_chose);

// Getter : $('#id').html(); recup le contenu html de <div id="id">
// Setter : $('#id').html("Hello");  inject du contenu HTML dans <div id="id">

// ex: $('#id').html("<strong>Hello</strong> World");
// ex: $('.red').css('background', "red");
// ex: $('.red').css({background: "red"});

console.log( $('#pere').height() );

// Chainage de méthodes
$('.enfant').first()
    .height('120px')
    .css({background: 'pink', color: "red"})
    .css('border-width', "15px")
    .html("Yoppp!!")
    .append(' Yep')
    .prepend('YOLOOO')
;