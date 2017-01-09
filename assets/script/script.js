$(document).ready(function() {

  $("#email-info, #snapchat-info, #portfolio-section, .hobbies-caption-wrapper1, .hobbies-caption-wrapper2").hide();
  $("#emilygosti, #home-description, #arrow").hide();
  $("#sidebar-button").hide();

  $("#emilygosti").delay(750).fadeIn(1500);

  $("#home-description").delay(1250).fadeIn(1500);

  $("#arrow").delay(2250).fadeIn(1500);

  $("#arrow").click(function() {
    $("html, body").animate({
      scrollTop: $("#about-section").offset().top
    }, 1000);
  });

  $(window).scroll(function() {
    var currScroll = $(window).scrollTop();
    if (currScroll >= $(window).height()) {
      $("#sidebar-button").show();
    } else {
      $("#sidebar-button").hide();
    }
  });

  $("#email").click(function() { // need to bold caption when clicked
    $("#email-info").slideToggle();
  });

  $("#snapchat").click(function() {
    $("#snapchat-info").slideToggle();
  });

  $("#portfolio").click(function() {
    $("#portfolio-section").slideToggle();
  });

  $("#golf").hover(function() {
    $("#golf-caption").fadeIn();
  }, function() {
    $("#golf-caption").fadeOut();
  });

  $("#symphony").hover(function() {
    $("#symphony-caption").fadeIn();
  }, function() {
    $("#symphony-caption").fadeOut();
  });

  $("#tennis").hover(function() {
    $("#tennis-caption").fadeIn();
  }, function() {
    $("#tennis-caption").fadeOut();
  });

  $("#camping").hover(function() {
    $("#camping-caption").fadeIn();
  }, function() {
    $("#camping-caption").fadeOut();
  });

  $("#sidebar-button").click(function() {
    if ($(".sidebar-wrapper").hasClass("sidebar-active") == true) {
      setTimeout(function() {
        $('body').removeClass('no-scroll');
      }, 300);
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-wrapper").removeClass("sidebar-active");
    } else {
      setTimeout(function() {
        $('body').addClass('no-scroll');
      }, 300);
      $("#sidebar-button").addClass("button-active");
      $(".sidebar-wrapper").addClass("sidebar-active");
    }
  });

  $(".page-wrapper").click(function() {
    if ($(".sidebar-wrapper").hasClass("sidebar-active") == true) {
      $("body").removeClass("no-scroll");
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-wrapper").removeClass("sidebar-active");
    }
  });

  $("a").click(function() {
    $("body").removeClass("no-scroll");
    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href')).offset().top
    }, 500);
    setTimeout(function() {
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-wrapper").removeClass("sidebar-active");
    }, 500);
    return false
  });

})
