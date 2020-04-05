$(document).ready(function () {
  const nav = $(".nav");
  const menu = $(".menutoggle");
  const mini = $(".minimenu");
  const btn = $(".header__btn");
  const call = $(".modal-call");
  const callBtn = $("[data-toggle=modal]");
  const closeBtn = $(".modal-call__close");
  const bookedClose = $(".modal-booked__close");
  const dialog = $(".modal-call__dialog");
  const booked = $(".modal-booked");
  const bookedBtn = $("[data-toggle=booked]");
  const bookedDialog = $(".modal-booked__dialog");

  btn.on("click", function () {
    mini.toggleClass("active");
    btn.toggleClass("btn--primary");
  });
  menu.on("click", function () {
    nav.toggleClass("nav-active");
  });
  callBtn.on("click", function () {
    call.toggleClass("active");
  });
  closeBtn.on("click", function () {
    call.toggleClass("active");
  });
  $(document).keyup(function (event) {
    if (event.which == "27") {
      call.removeClass("active");
    }
  });
  call.on("click", function (e) {
    if (!dialog.is(e.target) && dialog.has(e.target).length === 0) {
      call.toggleClass("active");
    }
  });
  bookedBtn.on("click", function () {
    booked.toggleClass("active");
  });
  bookedClose.on("click", function () {
    booked.toggleClass("active");
  });

  $(document).keyup(function (event) {
    if (event.which == "27") {
      booked.removeClass("active");
    }
  });
  booked.on("click", function (e) {
    if (!bookedDialog.is(e.target) && bookedDialog.has(e.target).length === 0) {
      booked.toggleClass("active");
    }
  });
  var mySwiper = new Swiper(".hero__swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".hero__swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".hero__swiper-button-next",
      prevEl: ".hero__swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
  var swiper = new Swiper(".services__swiper-container", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    pagination: {
      el: ".services__swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-2",
      prevEl: ".swiper-button-prev-2",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      440: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      995: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1240: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });
  var swiper = new Swiper(".gallery__swiper-container", {
    loop: true,
    cssMode: true,
    navigation: {
      nextEl: ".gallery__swiper-button-next",
      prevEl: ".gallery__swiper-button-prev",
    },
    pagination: {
      el: ".gallery__swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });
});
