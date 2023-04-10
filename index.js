$(document).ready(function () {
  $(window).on("load", function () {
    $(".loader").fadeOut();
    $(".preloader").delay(500).fadeOut();
  });

  $(".nav-toggle").click(function () {
    $(".header .nav").slideToggle();
  });

  $(".header .nav a").click(function () {
    if ($(window).width() < 868) {
      $(".header .nav").slideToggle();
    }
  });

  // Fixed Header
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".header").addClass("fixed");
    } else {
      $(".header").removeClass("fixed");
    }
  });

  // Smooth Scroll
  $("a").on("click", function () {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html,body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  // Dialog Box
  $("#button").click(function () {
    $("#dialog").dialog("open");
  });
  $("#dialog").dialog({
    title: "Thank you for Contacting",
    closeOnEscape: false,
    modal: true,
    autoOpen: false,
  });
});
