/* global chrome */
var button = document.getElementById('inject-button');
button.addEventListener('click', function() {
  chrome.runtime.sendMessage({side: 'inject'});
});

chrome.runtime.onMessage.addListener(function (message, sender, respond) {
  if (message.side == 'response') {
    button.textContent = message.result;
    button.style.backgroundColor = message.success ? 'green' : 'red';
  }
});

