'use strict';

var running = 0;

let changeStart = document.getElementById('start');
let changeEnd = document.getElementById('end');

//chrome.storage.sync.get('color', function(data) {
changeStart.style.backgroundColor = "green";
changeStart.setAttribute('value', "green");
//});
changeEnd.style.backgroundColor = "red";
changeEnd.setAttribute('value', "red");

changeStart.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    let changeStart = document.getElementById('start');
    changeStart.style.backgroundColor = "white"; 
    changeStart.setAttribute('value', "white");
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: ''});
  });
};

changeEnd.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    let changeEnd = document.getElementById('end');
    changeEnd.style.backgroundColor = "white"; 
    changeEnd.setAttribute('value', "white");
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: ''});
  });
};

var settime = 0;
if(running == 0) {
  document.getElementById("start").onclick = function(){startTime()};
  document.getElementById("add1").onclick = function(){add1()};
  document.getElementById("add5").onclick = function(){add5()};
  document.getElementById("add10").onclick = function(){add10()};
  document.getElementById("add30").onclick = function(){add30()};
  document.getElementById("add60").onclick = function(){add60()};
]


function add1() {
	settime = settime + 60;
    var min = parseInt((settime/60)%60, 10)
    var hour = parseInt(settime/3600, 10)
     min = min < 10 ? "0" + min : min;
    document.getElementById("time").innerHTML = hour + ":" + min +":00";
}

function add5() {
	settime = settime + 300;
    var min = parseInt((settime /60)% 60, 10)
    var hour = parseInt(settime/3600, 10)
     min = min < 10 ? "0" + min : min;
    document.getElementById("time").innerHTML = hour + ":" +min +":00";
}

function add10() {
	settime = settime + 600;
    var min = parseInt((settime /60)% 60, 10)
    var hour = parseInt(settime/3600, 10)
     min = min < 10 ? "0" + min : min;
    document.getElementById("time").innerHTML = hour+":"+min +":00";
}

function add30() {
	settime = settime + 1800;
    var min = parseInt((settime /60)% 60, 10)
    var hour = parseInt(settime/3600, 10)
     min = min < 10 ? "0" + min : min;
    document.getElementById("time").innerHTML =hour+":" +min +":00";
}

function add60() {
	settime = settime + 3600;
    var min = parseInt((settime/ 60) % 60, 10)
    var hour = parseInt(settime/3600, 10)
     min = min < 10 ? "0" + min : min;
    document.getElementById("time").innerHTML =hour+":"+ min +":00";
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
    	hours = parseInt(timer/3600, 10)
        minutes = parseInt((timer / 60) % 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent =hours+":"+ minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function startTime() {
    var display = document.querySelector('#time');
    running = 1;
    startTimer(settime, display);
};

/*
function functionStart() {
  let changeStart = document.getElementById("start");
  changeStart.addEventListener("click", function(element) {
    changeStart.classList.add("start");
  });
}
*/
/*
var changeStart = document.getElementById('start');

chrome.storage.sync.get('color', function(data) {
  changeStart.style.backgroundColor = "data.color";
  changeStart.setAttribute('value', data.color);
  changeStart.onclick = function(element) {
    let color = "red";
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.getElementById("start").style.background-color = "' + color + '";'});
    });
  };
});
*/
