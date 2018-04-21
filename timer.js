var settime = 0;
document.getElementById("start").onclick = function(){startTime()};
document.getElementById("add1").onclick = function(){add1()};
document.getElementById("add5").onclick = function(){add5()};
document.getElementById("add10").onclick = function(){add10()};
document.getElementById("add30").onclick = function(){add30()};
document.getElementById("add60").onclick = function(){add60()};


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
    startTimer(settime, display);
};


