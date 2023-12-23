// ==UserScript==
// @name Take Screenshot (Advanced)
// @namespace your_namespace
// @description Capture screenshots with advanced features using html2canvas.
// @include http*://*/*
// @grant none
// @require https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.0.0-rc.5/html2canvas.min.js
// ==/UserScript==

(function() {
  const html2canvas = window.html2canvas;

  // Define the element to capture (replace with your desired selector)
  const targetElement = document.querySelector('.specific-class');

  html2canvas(targetElement).then(canvas => {
    const imageData = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = imageData;
    link.download = 'screenshot_advanced.png';
    link.click();
  });
})();
