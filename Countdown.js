//Set last day:
var lastDay = new Date("2026-09-01 09:00").getTime();

//Function to update the countdown every second
var x = setInterval(function() {
    var now = new Date().getTime();
//Calculate the distance between the last day and the current date
    var distance = lastDay - now;
    var days = Math.floor(distance / (1000*60*60*24));
    var hours = Math.floor((distance / (1000*60*60)) - (days*24));

    //Display the result in HTML
    if (typeof document !== 'undefined') {
    document.getElementById("days").innerHTML = days + " Tage und " + hours + " Stunden";
    }
    //When the countdown is finished 
    if (distance < 0){
        clearInterval(x);
        document.getElementById("days").innerHTML = "FERTIG! Zeit für einen neuen Job!"
    }
}, 1000);

//Calculate last lesson countdown:
let lastLessons = [
  {
    lesson: {
      platform: "private",
      number: 10
    },
  },
  {
    lesson: {
        platform: "Preply",
        number: 32
    },
  },
];
let totalLessons = lastLessons[0].lesson.number + lastLessons[1].lesson.number;
document.getElementById("lessons").innerHTML = totalLessons;