

const heroSwipper = new Swiper('.hero_swipper', {
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
speed: 400,
spaceBetween: 100,
slidesPerView: 1,
allowSlideNext: true,
loop: true,
});


const swiper2 = new Swiper('.swiper_clients', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  speed: 400,
  spaceBetween: 20,
  slidesPerView: 3,
  allowSlideNext: true,
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    100: {
      slidesPerView: 1,
      spaceBetween: 20,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    700: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }

});




setInterval(() => {
  heroSwipper.slideNext();
},  3300)

setInterval(() => {
    swiper2.slideNext();
},  2300)
