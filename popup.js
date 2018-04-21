'use strict';

let changeStart = document.getElementById('start');

/*
chrome.storage.sync.get('color', function(data) {
  changeStart.style.backgroundColor = data.color;
  changeStart.setAttribute('value', data.color);
});
*/


changeStart.onclick = function(element) {
  let color = "red";
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    let changeStart = document.getElementById('start');
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'changeStart.style.backgroundColor = "' + color + '"; changeStart.setAttribute("value", color)';});
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
