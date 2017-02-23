/* global chrome */
var button = document.getElementById('inject-button');
button.addEventListener('click', function() {
  chrome.runtime.sendMessage({side: 'inject'});
});
