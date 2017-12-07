if ( !window.requestAnimationFrame ) {

  window.requestAnimationFrame = ( function() {

    return window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {

      window.setTimeout( callback, 1000 / 60 );

    };

  } )();

}


var marker;
var ball;
var w;
var h;
var bound;

function init()
{
  alert('Balance the ball in the space highlighted below');
  ball = document.getElementById("ball");
  marker = document.getElementById("marker");
  w = window.innerWidth;
  h = window.innerHeight;

  ball.style.left = (w/2)-50+"px";
  ball.style.top = (h/2)-50+"px";
  ball.velocity = {x:0,y:0}
  ball.position = {x:0,y:0}
  marker.style.left = (w/2)-15+"px";
  marker.style.top = (h/2)-15+"px";
  bound = marker.getBoundingClientRect();

  if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function(event) {
      ball.velocity.y = Math.round(event.beta);
      ball.velocity.x = Math.round(event.gamma);
    })
  }
  else {
    alert("Sorry, your browser doesn't support Device Orientation");
  } ;
  displayCount(initial);
  update();
}

function detect() {
  if (ball.position.x+50 > bound.left && ball.position.x+50 < bound.right && ball.position.y+50 > bound.top && ball.position.y+50 < bound.bottom){
    document.body.style.backgroundColor = "#"+Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("clock").style.display = "block";
    clearInterval(counter);
    initialMillis = Date.now();
    counter = setInterval(timer, 1);
  } else {
    document.body.style.backgroundColor = "#32c9d6";
    document.getElementById("clock").style.display = "none";
    clearInterval(counter);
  }
}

function update()
{
  ball.position.x += ball.velocity.x + Math.floor(Math.random()*20)-10;
  ball.position.y += ball.velocity.y + Math.floor(Math.random()*20)-10;

  if(ball.position.x > (w-100) && ball.velocity.x > 0)
  {
    ball.position.x = w-100;
  }

  if(ball.position.x < 0 && ball.velocity.x < 0)
  {
    ball.position.x = 0;
  }

  if(ball.position.y > (h-100) && ball.velocity.y > 0)
  {
    ball.position.y = h-100;
  }

  if(ball.position.y < 0 && ball.velocity.y < 0)
  {
    ball.position.y = 0;
  }

  ball.style.top = ball.position.y + "px"
  ball.style.left = ball.position.x + "px"
  detect();
  requestAnimationFrame( update );//KEEP ANIMATING
}

var initial = 300000;
var count = initial;
var counter; //10 will  run it every 100th of a second
var initialMillis;
var linkURL = ["../end/index.html", "../level7/index.html", "../level5/index.html", "../level6/index.html", "../level2/index.html", "../level8/index.html", "index.html"];

function timer() {
    if (count <= 0) {
        clearInterval(counter);
        return;
    }
    var current = Date.now();
    count = count - (current - initialMillis);
    initialMillis = current;
    displayCount(count);
}

function displayCount(count) {
    var res = count / 1000;
    document.getElementById("clock").innerHTML = res.toPrecision(count.toString().length) + " Seconds";
    if (count <= 0) {
        document.getElementById("clock").remove();
        document.body.innerHTML+= "<h1 id='nextLink'><a href='"+linkURL[Math.floor(Math.random()*7)]+"'>Continue</a></h1>";

    }
}
