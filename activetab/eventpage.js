/* global chrome */

chrome.runtime.onMessage.addListener(function (message, sender, respond) {
  if (message == 'inject') {
    chrome.tabs.executeScript({
      code: 'document.body.textContent.trim().slice(0,16)'
    }, function (result) {
      if (chrome.runtime.lastError) respond(chrome.runtime.lastError.message);
      else respond('SUCCESS: ' + result[0]);
    });
  }
  return true;
});
