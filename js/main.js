$(document).ready(function() {
  var mySwiper = new Swiper(".hero__swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".hero__swiper-pagination",
      clickable: true
    },

    // Navigation arrows
    navigation: {
      nextEl: ".hero__swiper-button-next",
      prevEl: ".hero__swiper-button-prev"
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar"
    }
  });
  var swiper = new Swiper(".services__swiper-container", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    pagination: {
      el: ".services__swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50
      }
    }
  });
});
