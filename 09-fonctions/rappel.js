// Fonction nommée
// --

// déclaration
function myFnc1() {
    // code a executer
}

// appel 
myFnc1();

// Appel de fonction lors d'un evenement
var btn = document.getElementById('btnForClick'); // <button id="btnForClick">
btn.addEventListener('click', myFnc1);
btn.addEventListener('blur', myFnc1);
btn.addEventListener('focus', myFnc1);
btn.addEventListener('mouseover', myFnc1);




// Fonction anonyme
// --

// déclaration
var myFnc2 = function(){
    // code a executer
}

// Appel
myFnc2();

// Appel de fonction lors d'un evenement
var btn = document.getElementById('btnForClick'); // <button id="btnForClick">
btn.addEventListener('click', myFnc2);

// Appel de fonction lors d'un evenement
var btn = document.getElementById('btnForClick'); // <button id="btnForClick">
btn.addEventListener('click', function() {
    // code a executer
});


// Fonction fléchée
// --

// déclaration
var myFnc3 = () => {
}

// Appel
// -

// Appel de fonction lors d'un evenement
var btn = document.getElementById('btnForClick'); // <button id="btnForClick">
btn.addEventListener('click', () => {
    // code a executer
});