// SwiperJS library for image slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.3,
    centeredSlides: true,
    spaceBetween: 20,
    grabCursor: 'true',
    centerSlide: 'true',
    loop: true,
    fade: 'true',
    keyboard: {
        enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        "@0.75": {
            slidesPerView: 2,
        },
        "@1.00": {
            slidesPerView: 2.3,
        },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
  });

  var appendNumber = 4;
  var prependNumber = 1;
  document
    .querySelector(".prepend-2-slides")
    .addEventListener("click", function (e) {
      e.preventDefault();
      swiper.prependSlide([
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      ]);
    });
  document
    .querySelector(".prepend-slide")
    .addEventListener("click", function (e) {
      e.preventDefault();
      swiper.prependSlide(
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
      );
    });
  document
    .querySelector(".append-slide")
    .addEventListener("click", function (e) {
      e.preventDefault();
      swiper.appendSlide(
        '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
      );
    });
  document
    .querySelector(".append-2-slides")
    .addEventListener("click", function (e) {
      e.preventDefault();
      swiper.appendSlide([
        '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
        '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      ]);
    });


