var seconds = 0;
var minutes = 0;
var counter;
var randMin1 = Math.floor(Math.random() * 6);
var randMin2 = Math.floor(Math.random() * 6)+5;
var randMin3 = Math.floor(Math.random() * 6)+10;
var randMin4 = Math.floor(Math.random() * 6)+15;
var randMin5 = Math.floor(Math.random() * 6)+20;
var randMin5 = Math.floor(Math.random() * 5)+25;
var randSec1 = Math.floor(Math.random() * 60);
var randSec2 = Math.floor(Math.random() * 60);
var randSec3 = Math.floor(Math.random() * 60);
var endMin = 29;
var endSec = 59;

window.addEventListener('scroll', function() {
  document.getElementById('prompt').style.display = "none";
  document.getElementById('time').style.display = "block";
  var scrolled = window.scrollY;
  counter = Math.trunc(scrolled/5317);
  seconds = Math.trunc((scrolled/5317)%60);
  minutes = Math.trunc(counter/60);
  document.getElementById('seconds').innerHTML = ("0" + seconds).slice(-2);
  document.getElementById('minutes').innerHTML = ("0" + minutes).slice(-2);
  if (minutes == randMin1 && seconds == randSec1) {
    document.getElementById("next").style.display = "block";
  } else {
    document.getElementById("next").style.display = "none";
  }
});
