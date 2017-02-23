/* global chrome */
var button = document.getElementById('inject-button');
button.addEventListener('click',function() {
  chrome.tabs.executeScript({
    code: 'document.body.textContent.trim().slice(0,16)'
  }, function (result) {
    if (chrome.runtime.lastError) console.error(chrome.runtime.lastError);
    else button.textContent = result;
  });
});
