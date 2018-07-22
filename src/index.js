import './../index.html';
import './styles/styles.scss';
import Swiper from 'swiper';

var carousel = new Swiper('.swiper-container', {
  slidesPerView: 3.5,
  centeredSlides: true,
  spaceBetween: 50,
  loop: true,
  breakpoints: {
    765: {
      slidesPerView: 1.5,
      spaceBetween: 25,
    }
  },
  navigation: {
    nextEl: '.nav-next',
    prevEl: '.nav-prev',
  },
  grabCursor: true,
  parallax: true,
});
