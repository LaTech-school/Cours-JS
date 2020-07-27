var i = 0;

function eat() {
    console.log("Je mange.");
}
function sleep() {
    console.log("Je dors.");
}
function rave() {
    console.log("Je suis en teuf.");
}
function repeat() {
    eat();
    sleep();
    rave();
    console.log("On recommence ...");

    if (i < 3) {
        i++;
        repeat();
    }
}

repeat();