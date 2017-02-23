/* global chrome */

chrome.runtime.onMessage.addListener(function (message, sender, respond) {
  if (message == 'inject') {
    chrome.tabs.executeScript({
      code: 'document.body.textContent.trim().slice(0,16)'
    }, function (result) {
      if (chrome.runtime.lastError) console.error(chrome.runtime.lastError);
      else respond(result);
    });
  }
});
