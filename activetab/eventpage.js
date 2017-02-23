/* global chrome */

chrome.runtime.onMessage.addListener(function (message, sender, respond) {
  if (message == 'inject') {
    chrome.tabs.executeScript({
      code: 'document.body.children[0].textContent'
    }, function (result) {
      if (chrome.runtime.lastError) console.error(chrome.runtime.lastError);
      else respond(result);
    });
  }
});
