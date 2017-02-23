/* global chrome */
var button = document.getElementById('inject-button');
button.addEventListener('click',function() {
  chrome.runtime.sendMessage('inject', function(result) {
    button.textContent = result;
  });
});
