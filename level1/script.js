var seconds = 0;
var minutes = 0;
var counter;
var randMin1 = Math.floor(Math.random() * 6);
var randMin2 = Math.floor(Math.random() * 6)+5;
var randMin3 = Math.floor(Math.random() * 6)+10;
var randMin4 = Math.floor(Math.random() * 6)+15;
var randMin5 = Math.floor(Math.random() * 6)+20;
var randMin6 = Math.floor(Math.random() * 5)+25;
var randSec1 = Math.floor(Math.random() * 60);
var randSec2 = Math.floor(Math.random() * 60);
var randSec3 = Math.floor(Math.random() * 60);
var endMin = 29;
var endSec = 59;
var linkURL = ["../level8/index.html", "../level3/index.html", "../level4/index.html", "../level5/index.html", "../level2/index.html", "index.html", "index.html", "index.html", "index.html", "index.html", "index.html", "index.html", "index.html"];
var linkURLfinal = ["../level9/index.html", "../level7/index.html", "../level2/index.html", "../level2/index.html", "../level2/index.html", "../level2/index.html"];

// if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
// window.onmousewheel = document.onmousewheel = wheel;
// function wheel(event) {
//     var delta = 0;
//     if (event.wheelDelta) delta = event.wheelDelta / 120;
//     else if (event.detail) delta = -event.detail / 3;
//     handle(delta);
//     if (event.preventDefault) event.preventDefault();
//     event.returnValue = false;
// }
// function handle(delta) {
//     var time = 10;
// 	var distance = 3;
//     $('html, body').stop().animate({
//         scrollTop: $(window).scrollTop() - (distance * delta)
//     }, time );
// }

window.addEventListener('scroll', function() {
  // console.log(randMin1+','+randMin2+','+randMin3+','+randMin4+','+randMin5+','+randMin6+','+randSec1);
  // alert("Hello! I am an alert box!");
  document.getElementById('prompt').style.display = "none";
  document.getElementById('time').style.display = "block";
  var scrolled = window.scrollY;
  counter = Math.trunc(scrolled/5317);
  seconds = Math.trunc((scrolled/5317)%60);
  minutes = Math.trunc(counter/60);
  document.getElementById('seconds').innerHTML = ("0" + seconds).slice(-2);
  document.getElementById('minutes').innerHTML = ("0" + minutes).slice(-2);
  if (seconds == Math.trunc((scrolled/(5317/60))%60)) {
    document.body.style.backgroundColor = "#"+Math.floor(Math.random()*16777215).toString(16);
  }
  if (minutes == randMin1 && seconds == randSec1) {
    document.getElementById("next1").style.display = "block";
  } else {
    document.getElementById("next1").style.display = "none";
  }
  if (minutes == randMin2 && seconds == randSec2) {
    document.getElementById("next2").style.display = "block";
  } else {
    document.getElementById("next2").style.display = "none";
  }
  if (minutes == randMin3 && seconds == randSec3) {
    document.getElementById("next3").style.display = "block";
  } else {
    document.getElementById("next3").style.display = "none";
  }
  if (minutes == randMin4 && seconds == randSec2) {
    document.getElementById("next4").style.display = "block";
  } else {
    document.getElementById("next4").style.display = "none";
  }
  if (minutes == randMin5 && seconds == randSec3) {
    document.getElementById("next5").style.display = "block";
  } else {
    document.getElementById("next5").style.display = "none";
  }
  if (minutes == randMin6 && seconds == randSec1) {
    document.getElementById("next6").style.display = "block";
  } else {
    document.getElementById("next6").style.display = "none";
  }
  if (minutes == 29 && seconds == 59) {
    document.getElementById("next").style.display = "block";
  } else {
    document.getElementById("next").style.display = "none";
  }
});
function otherLink() {
  window.location=linkURL[Math.floor(Math.random()*13)];
}

function finalLink() {
  window.location=linkURLfinal[Math.floor(Math.random()*6)];
}
