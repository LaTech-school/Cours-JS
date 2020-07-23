// Les Opérateurs

// Les opérateurs d'affectation
// --

// Affectation simple 
// Symbole:     =
// Syntaxe:     a = b 
var a = 42;

// Affectation après addition
// Symbole:     +=
// Syntaxe:     a += b 
// Equivalent:  a = a + b
var a = 10;
    a += 5;
console.log('a += 5', a);

// Affectation après soustraction
// Symbole:     -=
// Syntaxe:     a -= b 
// Equivalent:  a = a - b
var a = 10;
a -= 5;
console.log('a -= 5', a);

// Affectation après multiplication
// Symbole:     *=
// Syntaxe:     a *= b 
// Equivalent:  a = a * b
var a = 10;
a *= 5;
console.log('a *= 5', a);

// Affectation après division
// Symbole:     /=
// Syntaxe:     a /= b 
// Equivalent:  a = a / b
var a = 10;
a /= 5;
console.log('a /= 5', a);

// Affectation après Modulo
// Symbole:     %=
// Syntaxe:     a %= b 
// Equivalent:  a = a % b
var a = 10;
a %= 4;
console.log('a %= 4', a);

// Affectation après exponentiation
// Symbole:     **=
// Syntaxe:     a **= b 
// Equivalent:  a = a ** b
var a = 10;
a **= 4;
console.log('a **= 4', a);

// Affectation après décalage à gauche
// Symbole:     <<=
// Syntaxe:     a <<= b 
// Equivalent:  a = a << b
var a = 10;
a <<= 4;
console.log('a <<= 4', a);

// Affectation après décalage à droite
// Symbole:     >>=
// Syntaxe:     a >>= b 
// Equivalent:  a = a >> b
var a = 10;
a >>= 4;
console.log('a >>= 4', a);






// Les opérateurs de comparaison
// --

// Egalité
// Symbole:     ==
// Syntaxe:     a == b
console.log( '42 == "42"', 42 == "42" );

// Inegalite
// Symbole:     !=
// Syntaxe:     a != b
console.log( '42 != "42"', 42 != "42" );
console.log( '40 != "42"', 40 != "42" );
console.log( '40 != 42', 40 != 42 );

// Egalité stricte
// Symbole:     ===
// Syntaxe:     a === b
console.log( '42 === "42"', 42 === "42" );

// Inégalité stricte
// Symbole:     !==
// Syntaxe:     a !== b
console.log( '42 !== "42"', 42 !== "42" );
console.log( '42 !== 42', 42 !== 42 );

// Supériorité stricte
// Symbole:     >
// Syntaxe:     a > b
console.log( '42 > 42', 42 > 42 );
console.log( '84 > 42', 84 > 42 );
console.log( '42 > "42"', 42 > "42" );
console.log( '84 > "42"', 84 > "42" );
console.log( '21 > "42"', 21 > "42" );

// Supériorité ou égalité
// Symbole:     >=
// Syntaxe:     a >= b
console.log( '42 >= 42', 42 >= 42 );
console.log( '84 >= 42', 84 >= 42 );
console.log( '42 >= "42"', 42 >= "42" );
console.log( '84 >= "42"', 84 >= "42" );
console.log( '21 >= "42"', 21 >= "42" );

// Infériorité stricte
// Symbole:     <
// Syntaxe:     a < b
console.log( '42 < 42', 42 < 42 );
console.log( '84 < 42', 84 < 42 );
console.log( '42 < "42"', 42 < "42" );
console.log( '84 < "42"', 84 < "42" );
console.log( '21 < "42"', 21 < "42" );

// Infériorité ou égalité
// Symbole:     <=
// Syntaxe:     a <= b
console.log( '42 <= 42', 42 <= 42 );
console.log( '84 <= 42', 84 <= 42 );
console.log( '42 <= "42"', 42 <= "42" );
console.log( '84 <= "42"', 84 <= "42" );
console.log( '21 <= "42"', 21 <= "42" );




// Opérateurs arithmétiques
// --

// Plus unaire 
// Symbole:     +
// Syntaxe:     a + b
console.log( '42 + 42', 42 + 42 );

// Négation unaire
// Symbole:     -
// Syntaxe:     a - b
console.log( '42 - 42', 42 - 42 );

// Multiplication
// Symbole:     *
// Syntaxe:     a * b
console.log( '42 * 42', 42 * 42 );

// Division
// Symbole:     /
// Syntaxe:     a / b
console.log( '12 / 5', 12 / 5 );

// Reste : Modulo
// Symbole:     %
// Syntaxe:     a % b
console.log( '12 % 5', 12 % 5 );
console.log( '5 % 2', 5 % 2 );
console.log( '6 % 2', 6 % 2 );

// Puissance
// Symbole:     **
// Syntaxe:     a ** b
console.log( '10 ** 4', 10 ** 4 );


// Incrément 
// Symbole:     ++
// Syntaxe:     a++  (post incrémentation)
var a1 = 10;
console.log( 'a1++', a1++ );
console.log( 'a1', a1 );

// Syntaxe:     ++a  (pré incrémentation)
var a2 = 10;
console.log( '++a2', ++a2 );
console.log( 'a2', a2 );

// Equivalent:  a = a + 1
var a3 = 10;
a3 = a3 + 1;
console.log( 'a3', a3 );



// Décrément 
// Symbole:     --
// Syntaxe:     b--  (post décrémentation)
var b1 = 10;
console.log( 'b1--', b1-- );
console.log( 'b1',b1 );

// Syntaxe:     --b  (pré décrémentation)
var b2 = 10;
console.log( '--b2', --b2 );
console.log( 'b2', b2 );

// Equivalent:  b = b - 1
var b3 = 10;
b3 = b3 - 1;
console.log( 'b3', b3 );

// Déclarer la variable a = 100
// Afficher 100 et faire l'opération en meme temps 
// Afficher 101
var a = 100;        //  $a vaut 100
console.log(a++);   // Affiche "$a" 100, puis ajoute 1 à "$a"; à la fin de cette ligne "$a" vaut 101
console.log(a--);   // Affiche "$a" 101, puis soustrait 1 à "$a";à la fin de cette ligne "$a" vaut 100
console.log(++a);
console.log(a);




// Opérateurs de chaine
// --

// Symbole:     +
// Syntaxe:     a + b
// /!\ "a" et "b" sont des chaines de caractères
var a = "Hello ";
var b = "World";
console.log( a + b );

var firstname = "Bruce";
console.log( "son nom est "+ firstname );