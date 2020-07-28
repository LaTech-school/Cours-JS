// // Instance de l'objet Date basé sur l'horloge du client
// var date = new Date();
// // console.log(date);

// // recup. de l'année courante
// var year = date.getFullYear();
// console.log(year);

// // recup. du mois courant
// var month = date.getMonth();
// console.log(month);

// // recup. du numero de jour de la semaine
// var weekDay = date.getDay();
// console.log(weekDay);

// // recup. du jour courant
// var day = date.getDate();
// console.log(day);

// // recup. de l'heure
// var hour = date.getHours();
// console.log(hour);

// // recup. des minute
// var minute = date.getMinutes();
// console.log(minute);

// // recup. des secondes
// var second = date.getSeconds();
// console.log(second);

// // recup. des millisecondes
// var ms = date.getMilliseconds();
// console.log(ms);



function clock() {

    var monthes={
        fr: ["janvier","février","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","décembre"],
        en: ["january","february","marsh","avril","mai","juin","july","aout","septembre","octobre","novembre","décembre"],
    };

    // Init. de l'objet Date
    var date = new Date();

    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();


    // Cibler les elements HTML
    var el_year = document.getElementById('year');
    var el_month = document.getElementById('month');
    var el_day = document.getElementById('day');
    var el_hour = document.getElementById('hour');
    var el_minute = document.getElementById('minute');
    var el_second = document.getElementById('second');

    // Injection de la donnée  02,04,10,15
    el_year.innerHTML = year;
    el_month.innerHTML = monthes.en[month];
    el_day.innerHTML = day <= 9 ? "0"+day : day;
    el_hour.innerHTML = hour <= 9 ? "0"+hour : hour;
    el_minute.innerHTML = minute <= 9 ? "0"+minute : minute;
    el_second.innerHTML = second <= 9 ? "0"+second : second;
}

clock();
setInterval(clock, 1000);