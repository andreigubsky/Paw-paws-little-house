import { fetchReviews } from './paw-hut-api-feedbacks.js';
import { renderStars, createReviewCardMarkup } from '/js/render-functions';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const reviewsContainer = document.getElementById('feedbacks-list');

async function initReviewsSection() {
  if (!reviewsContainer) return;
  const reviews = await fetchReviews();
  if (!reviews.length) return;
  reviewsContainer.innerHTML = reviews.map(createReviewCardMarkup).join('');
  const ratingElements = document.querySelectorAll('.rating-container');
  ratingElements.forEach(element => {
    const score = Number(element.dataset.score) || 0;
    renderStars(element, score, 5);
  });
  new Swiper('.reviews-swiper', {
    modules: [Navigation, Pagination],
    speed: 700,
    spaceBetween: 16,
    slidesPerView: 1,
    grabCursor: true,
    pagination: {
      el: '.reviews-slider .swiper-pagination',
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 1,
    },
    navigation: {
      nextEl: '.reviews-slider .swiper-button-next',
      prevEl: '.reviews-slider .swiper-button-prev',
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 16 },
      768: { slidesPerView: 2, spaceBetween: 16 },
      1440: { slidesPerView: 2, spaceBetween: 28 },
    },
  });
}
document.addEventListener('DOMContentLoaded', initReviewsSection);
