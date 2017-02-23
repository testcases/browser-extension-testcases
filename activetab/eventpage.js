/* global chrome */

chrome.runtime.onMessage.addListener(function (message, sender, respond) {
  if (message.side == 'inject') {
    chrome.tabs.executeScript({
      code: 'document.body.textContent.trim().slice(0,16)'
    }, function (result) {
      chrome.runtime.sendMessage({
        side: 'response',
        success: !chrome.runtime.lastError,
        result: chrome.runtime.lastError ?
          chrome.runtime.lastError.message : result
      });
    });
  }
});
