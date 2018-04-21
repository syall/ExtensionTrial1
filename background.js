'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#99ff66'}, function() {
    console.log('The color is a neon green.');
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'developer.chrome.com'},
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
