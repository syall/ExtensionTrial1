var changeStart = document.getElementById('start');

chrome.storage.sync.get('color', function(data) {
  changeStart.style.backgroundColor = "data.color";
  changeStart.setAttribute('value', data.color);
  changeStart.onclick = function(element) {
  let color = "red";
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.getElementById("start").style.backgroundColor = "' + color + '";'});
    });
  };
});

