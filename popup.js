'use strict';

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
