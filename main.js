// Wait until the page fully loads
$(document).ready(function() {
  // Initialize the Turn.js book
  $("#book").turn({
    width: 800,
    height: 500,
    autoCenter: true,
    gradients: true,
    duration: 1000 // 1 second flip animation
  });
});
