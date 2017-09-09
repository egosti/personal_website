$(document).ready(function() {

  $("#email-info, #snapchat-info, #portfolio-section, .hobbies-caption-wrapper1, .hobbies-caption-wrapper2").hide();
  $("#emilygosti, #home-description, #down-arrow").hide();
  $("#sidebar-button").hide();

  $("#emilygosti").delay(750).fadeIn(1500);

  $("#home-description").delay(1250).fadeIn(1500);

  $("#down-arrow").delay(2250).fadeIn(1500);

  $("#down-arrow").click(function() {
    $("html, body").animate({
      scrollTop: $("#about-section").offset().top
    }, 1000);
  });

  $("#up-arrow").click(function() {
    $("html, body").animate({
      scrollTop: $("#resume-section").offset().top
    }, 1000);
    $("#portfolio-section").slideUp();
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

  $("#photography").hover(function() {
    $("#photography-caption").fadeIn();
  }, function() {
    $("#photography-caption").fadeOut();
  });

  $("#camping").hover(function() {
    $("#camping-caption").fadeIn();
  }, function() {
    $("#camping-caption").fadeOut();
  });

  $("#wdd-caption").hover(function() {
    $("#wdd-caption").css("background", "white");
    $("#wdd-words").css("color", "#5B6982");
  }, function() {
    $("#wdd-caption").css("background", "none");
    $("#wdd-words").css("color", "white");
  });

  $("#blank-caption").hover(function() {
    $("#blank-caption").css("background", "white");
    $("#blank-words").css("color", "#5B6982");
  }, function() {
    $("#blank-caption").css("background", "none");
    $("#blank-words").css("color", "white");
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
