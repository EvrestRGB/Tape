// ==UserScript==
// @name Take Screenshot (Full Page)
// @namespace evrest_rgb
// @description Capture a screenshot of the entire webpage.
// @include http*://*/*
// @grant none
// ==/UserScript==

(function() {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const body = document.body;

  canvas.width = body.offsetWidth;
  canvas.height = body.offsetHeight;

  context.drawImage(body, 0, 0);

  const imageData = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.href = imageData;
  link.download = 'screenshot.png';
  link.click();
})();
