/* global chrome */
var button = document.getElementById('inject-button');
var delayInput = document.getElementById('delay');
button.addEventListener('click', function() {
  chrome.runtime.sendMessage({side: 'inject',
    delay: parseInt(delayInput.value, 10)});
});
