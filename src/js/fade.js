const $ = require('jquery');
$(document).ready(function() {
  $("h2").fadeIn(1500, 'linear');
  window.setTimeout(() => $("p").fadeIn(1500, 'linear'), 1000);
});
