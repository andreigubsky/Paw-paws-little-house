import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperContainer =
  document.querySelector('.about-us-slider .mySwiper') ||
  document.querySelector('.mySwiper');
if (SwiperContainer) {
  new Swiper(SwiperContainer, {
    modules: [Navigation, Pagination, Keyboard],
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 700,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: '.about-us-slider .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.about-us-slider .swiper-button-next',
      prevEl: '.about-us-slider .swiper-button-prev',
    },
  });
}
