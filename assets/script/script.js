$(document).ready(function() {

  $("#email-info, #snapchat-info, #portfolio-section, .hobbies-caption").hide();
  $("#emilygosti, #home-description, #arrow").hide();

  $("#emilygosti").delay(750).fadeIn(1500);

  $("#home-description").delay(1250).fadeIn(1500);

  $("#arrow").delay(2250).fadeIn(1500);

  $("#arrow").click(function() {
    $("html, body").animate({
      scrollTop: $("#about-section").offset().top
    }, 1000);
  });

  $("#email").click(function() {
    $("#email-info").slideToggle();
  });

  $("#snapchat").click(function() {
    $("#snapchat-info").slideToggle();
  });

  $("#portfolio").click(function() {
    $("#portfolio-section").slideToggle();
  });

})
