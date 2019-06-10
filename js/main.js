'use strict'



$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
    renderImages();
    renderWordsCloud();
});
