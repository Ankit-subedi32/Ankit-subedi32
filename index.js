// Wait until DOM is fully loaded
$(document).ready(function () {
  // ===== Scroll-up button show/hide =====
  $(window).scroll(function () {
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }

    // Sticky navbar
    if (this.scrollY > 50) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });

  // ===== Slide-up on button click =====
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // Removing smooth scroll on scroll-up button click
    $("html").css("scrollBehavior", "auto");
  });

  // ===== Smooth scroll on menu items click =====
  $(".navbar .menu li a").click(function () {
    // Applying again smooth scroll on menu items
    $("html").css("scrollBehavior", "smooth");
  });

  // ===== Toggle menu/navbar script =====
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // ===== Typing text animation =====
  var typed = new Typed(".typing", {
    strings: ["Web Developer", "Ui/Ux Designer", "Freelancer", "MERN Enthusiast"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed2 = new Typed(".typing-2", {
    strings: ["Web Developer", "Ui/Ux Designer", "Freelancer", "MERN Enthusiast"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // ===== Owl Carousel (Teams section) =====
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
