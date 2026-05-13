const swiper = new Swiper('.js-testimonials-slider', {
  grabCursor: true,
  spaceBetween: 30,
  pagination:{
    el: '.js-testimonials-pagination',
    clickable: true
  },
  breakpoints:{
    780:{
        slidesPerView: 3
    },
    480:{
        slidesPerView: 1
    }
  }
});