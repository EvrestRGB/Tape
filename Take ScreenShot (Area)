// ==UserScript==
// @name Take Screenshot (Area)
// @namespace your_namespace
// @description Capture a screenshot of a specific area.
// @include http*://*/*
// @grant none
// ==/UserScript==

(function() {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const body = document.body;

  // Define the area to capture (replace with your desired selectors)
  const targetElement = document.querySelector('.specific-class');
  const boundingBox = targetElement.getBoundingClientRect();

  canvas.width = boundingBox.width;
  canvas.height = boundingBox.height;

  context.drawImage(body, boundingBox.left, boundingBox.top, canvas.width, canvas.height, 0, 0);

  const imageData = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.href = imageData;
  link.download = 'screenshot_area.png';
  link.click();
})();
