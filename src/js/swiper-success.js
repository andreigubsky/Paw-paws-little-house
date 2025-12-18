import axios from 'axios';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { renderStars } from '/js/render-functions';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const REVIEWS_URL = 'https://paw-hut.b.goit.study/api/feedbacks';
const reviewsContainer = document.getElementById('feedbacks-list');
async function fetchReviews() {
  try {
    const response = await axios.get(REVIEWS_URL);
    return response.data.feedbacks || response.data || [];
  } catch (error) {
    return [];
  }
}
function createReviewCardMarkup(review) {
  const rating = review.rate;
  const comment = review.description;
  const author = review.author;
  return `
    <div class="swiper-slide review-card">
      <div class="review-rating">
          <div class="rating-container" data-score="${rating}"></div>
      </div>
      <p class="review-text">${comment}</p>
      <div class="review-author-wrap">
        <h3 class="review-author">${author}</h3>
      </div>
    </div>
  `;
}
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
    speed: 500,
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
