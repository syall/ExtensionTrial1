'use strict';

//Seeing whether the timer is running or not
var running = 0;

//Audio
var audio;

//Timer
var intv;

//Define Start and End Timer buttons
let changeStart = document.getElementById('start');
let changeEnd = document.getElementById('end');

//Set Start Button's Background
changeStart.style.backgroundColor = "green";
changeStart.setAttribute('value', "green");

//Set Reset Button's Background
changeEnd.style.backgroundColor = "red";
changeEnd.setAttribute('value', "red");

//Time of counting down in Seconds
var settime = 0;

//If it hasn't started yet
if(running == 0) {
  //Now it is running
  running = 1;
  //Start
  changeStart.onclick = function(){startTime(); return;};
  //Add 1 minute
  document.getElementById("add1").onclick = function(){add1()};
  //Add 5 minutes
  document.getElementById("add5").onclick = function(){add5()};
  //Add 10 minutes
  document.getElementById("add10").onclick = function(){add10()};
  //Add 30 minutes
  document.getElementById("add30").onclick = function(){add30()};
  //Add 60 minutes
  document.getElementById("add60").onclick = function(){add60()};
}
//If it has already started
else if(running == 1) {
  //running
  running = -1;
  //End
  changeEnd.onclick = function(){endTime(); return;};
}

//Add 1 minute
function add1() {
  //Add 60 seconds
  settime = settime + 60;
  //Calculate Minutes
  var min = parseInt((settime/60)%60, 10);
  //Calculate Hours
  var hour = parseInt(settime/3600, 10);
  //Deal with printing the minutes
  min = min < 10 ? "0" + min : min;
  //Print the Total Time
  document.getElementById("time").innerHTML = hour + ":" + min + ":00";
}

//Add 5 minutes
function add5() {
  //Add 300 seconds
	settime = settime + 300;
  //Calculate Minutes
  var min = parseInt((settime /60)% 60, 10);
  //Calculate Hours
  var hour = parseInt(settime/3600, 10);
  //Deal with printing the minutes
  min = min < 10 ? "0" + min : min;
  //Print the Total Time
  document.getElementById("time").innerHTML = hour + ":" + min + ":00";
}

//Add 10 minutes
function add10() {
  //Add 600 seconds
  settime = settime + 600;
  //Calculate Minutes
  var min = parseInt((settime /60)% 60, 10);
  //Calculate Hours
  var hour = parseInt(settime/3600, 10);
  //Deal with printing the minutes
  min = min < 10 ? "0" + min : min;
  //Print the Total Time
  document.getElementById("time").innerHTML = hour + ":" + min + ":00";
}

//Add 30 minutes
function add30() {
  //Add 1800 seconds
  settime = settime + 1800;
  //Calculate Minutes
  var min = parseInt((settime /60)% 60, 10);
  //Calculate Hours
  var hour = parseInt(settime/3600, 10);
  //Deal with printing the minutes
  min = min < 10 ? "0" + min : min;
  //Print the Total Time
  document.getElementById("time").innerHTML = hour + ":" + min + ":00";
}

//Add 60 minutes
function add60() {
  //Add 3600 seconds
  settime = settime + 3600;
  //Calculate Minutes
  var min = parseInt((settime/ 60) % 60, 10);
  //Calculate Hours
  var hour = parseInt(settime/3600, 10);
  //Deal with printing the minutes
  min = min < 10 ? "0" + min : min;
  //Print the Total Time
  document.getElementById("time").innerHTML = hour + ":" + min + ":00";
}

//Start Timer
function startTimer(duration, display) {
  
    //Set the Variables timer, hours, minutes, and seconds
    var timer = duration, hours, minutes, seconds;
    //Calculate every Second
    intv = setInterval(function () {
        //Calculate Hours
    	  hours = parseInt(timer/3600, 10)
        //Calculate Minutes
        minutes = parseInt((timer / 60) % 60, 10)
        //Calculate Seconds
        seconds = parseInt(timer % 60, 10);
        
        //Deal with printing the Minutes
        minutes = minutes < 10 ? "0" + minutes : minutes;
        //Dealing with printing the Seconds
        seconds = seconds < 10 ? "0" + seconds : seconds;

        //Print the Total Time
        display.textContent = hours + ":" + minutes + ":" + seconds;
        
        //When timer reaches 0
        if (--timer < 0 ) {
          //End the timer
          endTime();
          //Print out "Time's Up!"
          document.getElementById("time").innerHTML = "Time's Up!";
        }
      
        //If Reset Timer is clicked while still Running
        document.getElementById("end").onclick = function(){
          //Set timer to 0
          timer = 0; 
        };
      
    }, 1000);
}

//Start Time Wrapping Function
function startTime() {
    //Display Initial Time
    var display = document.querySelector('#time');
    //Call startTimer
    startTimer(settime, display);
};

//End Time Function
function endTime() {
    //Set total Time to 0
    settime = 0;
    //clear interval
    clearInterval(intv);
    //Play Burnt Rice
    audio = new Audio('BURNT RICE.mp3');
    audio.play();
};
