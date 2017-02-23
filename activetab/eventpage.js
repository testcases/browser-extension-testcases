/* global chrome */

chrome.runtime.onMessage.addListener(function (message, sender, respond) {
  if (message.side == 'inject') {
    chrome.tabs.executeScript({
      code: 'document.documentElement.outerHTML'
    }, function (results) {
      chrome.tabs.create({
        url: 'data:text/html,%3C!DOCTYPE%20html%3E' + encodeURIComponent(results[0])
      });
    });
  }
});
