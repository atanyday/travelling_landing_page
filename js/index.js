var d = new Date();
var currentHour = d.getHours();

var isNight = false;
console.log("boo");
if (currentHour >= 6 && currentHour <= 12)
{
    document.getElementById("header").style.backgroundImage = "url('images/bg-morning.jpg')";
    document.getElementById("header-title-container").style = "color: #dfe4e0; padding-top: 320px; padding-bottom: 280px";
    document.getElementById("header-title").innerHTML = "Good morning!";
    document.getElementById("header-description").innerHTML = "Set a goal that makes you want to jump out of bed in the morning";
}

if (currentHour > 12 && currentHour <= 18)
{
    document.getElementById("header").style.backgroundImage = "url('images/bg-day.jpg')";
    document.getElementById("header-title-container").style = "color:#000000; padding-top:50px; padding-bottom:550px";
    document.getElementById("header-title").innerHTML = "Good afternoon!";
    document.getElementById("header-description").innerHTML = "Nothing is worth more than this day";
}

if (currentHour >= 18 && currentHour <= 22) {
    isNight = true;
    document.getElementById("header").style.backgroundImage = "url('images/bg-evening.jpg')";
    document.getElementById("header-title-container").style = "color:#0f1b23; padding-top:320px; padding-bottom:280px";
    document.getElementById("header-title").innerHTML = "Good evening!";
    document.getElementById("header-description").innerHTML = "It is almost impossible to watch a sunset and not dream";
}

if (currentHour == 22 || currentHour == 23 || currentHour == 0 || currentHour == 1 || currentHour == 2 || currentHour == 3 || currentHour == 4 || currentHour == 5) {
    isNight = true;
    document.getElementById("header").style.backgroundImage = "url('images/bg-night.jpg')";
    document.getElementById("header-title-container").style = "color:#6f665e; padding-top:150px; padding-bottom:450px";
    document.getElementById("header-title").innerHTML = "Good night!";
    document.getElementById("header-description").innerHTML = "Without the dark, we'd never see the stars";
}


