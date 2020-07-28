// Instance de l'objet Date basé sur l'horloge du client
var date = new Date();
// console.log(date);

// recup. de l'année courante
var year = date.getFullYear();
console.log(year);

// recup. du mois courant
var month = date.getMonth();
console.log(month);

// recup. du numero de jour de la semaine
var weekDay = date.getDay();
console.log(weekDay);

// recup. du jour courant
var day = date.getDate();
console.log(day);

// recup. de l'heure
var hour = date.getHours();
console.log(hour);

// recup. des minute
var minute = date.getMinutes();
console.log(minute);

// recup. des secondes
var second = date.getSeconds();
console.log(second);

// recup. des millisecondes
var ms = date.getMilliseconds();
console.log(ms);



function clock() {

    // Init. de l'objet Date
    var sec = getLesSecondes();

    // Cibler les elements HTML
    var xxxx = document.getBidule("yyyy");

    // Injection de la donnée  02,04,10,15
    xxxx.innerHTML = sec;

    // console.log("Tic Tac");

}

clock();
setInterval(clock, 500);