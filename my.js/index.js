/*==================
    prloader
====================*/
$(window).on("load", function () {
  $("#preloader_post").fadeOut();
  $("#preloader").delay(300).fadeOut("slow");
});
/*==================
   team- owl-carousel
====================*/

$(document).ready(function () {
  $("#team-members").owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 800,
    loop: true,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navtext: [
      '<span> <i class="fa-solid fa-angle-left"></i> </span>',
      '<span><i class="fa-solid fa-angle-right"></i> </span>',
    ],
  });
});
/*==================
    progress
====================*/
$(function () {
  $("#progress-elements").waypoint(
    function () {
      $(".progress-bar").each(function () {
        $(this).animate(
          {
            width: $(this).attr("aria-valuenow") + "%",
          },
          600
        );
      });

      this.destroy();
    },

    { offset: "bottom-in-view" }
  );
});

// $(function () {
//   $("#progress-elements").waypoint(
//     function () {
//       $(".progress-bar").each(function () {
//         $(this).animate(
//           {
//             width: $(this).attr("arial-valuenow") + "%",
//           },
//           600
//         );
//       });
//       this.destroy();
//     },
//     { offset: "bottom-in-view" }
//   );
// });
/*==================
    responsive-tabs
====================*/
$(function () {
  $("#tabs").responsiveTabs({
    animation: "slide",
  });
});
/*==================
    istopes
====================*/

$(window).on("load", function () {
  var $grid = $(".grid").isotope({});
  // filter items on button click
  $(".profito-buttons").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });

    $(".profito-buttons").find(".active").removeClass("active");
    $(this).addClass("active");
  });
});
/*==================
    magnific
====================*/
$(".profito-items").magnificPopup({
  delegate: "a",
  type: "image",
  gallery: {
    enabled: true,
  },
});
/*==================
   team- owl-carousel
====================*/

$(document).ready(function () {
  $("#testimonial-items").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 800,
    loop: true,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navtext: [
      '<span> <i class="fa-solid fa-angle-left"></i> </span>',
      '<span><i class="fa-solid fa-angle-right"></i> </span>',
    ],
  });
});

/*==================
   counter
====================*/

$(function () {});
$(".counter").counterUp({
  delay: 30,
  time: 3000,
});

/*==================
   placements
====================*/

$(document).ready(function () {
  $("#placements-list").owlCarousel({
    items: 6,
    autoplay: true,
    smartSpeed: 950,
    loop: true,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navtext: [
      '<span> <i class="fa-solid fa-angle-left"></i> </span>',
      '<span><i class="fa-solid fa-angle-right"></i> </span>',
    ],
  });
});

/*==================
   navbar-effect
====================*/

$(function () {
  ShowHideNav();
  $(window).scroll(function () {
    ShowHideNav();
  });
  function ShowHideNav() {
    if ($(window).scrollTop() > 50) {
      $("nav").addClass("navbar-white");
      $("#btn-to-top").fadeIn();
    } else {
      $("nav").removeClass("navbar-white");
      $("#btn-to-top").fadeOut();
    }
  }
});
/*==================
   smooth-scrollng effect
====================*/
//*$(function () {
//   $("a.smooth-scroll").click(function (event) {
//     event.preventDefault();
//     var section_id = $(this).attr("href");
//     $("html,body").animate(
//       {
//         screenTop: $(section_id).offset().top - 65,
//       },
//       1000
//     );
//   });
// );
