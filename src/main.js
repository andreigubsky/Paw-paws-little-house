import './js/modal';
import './js/order-modal';
import './js/pagination';
import './js/paw-hut-api-animals';
import './js/paw-hut-api-categories';
import './js/paw-hut-api-feedbacks';
import './js/paw-hut-api-orders';
import './js/render-functions';

import axios from 'axios';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import Raty from 'raty-js';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import starOn from './img/raty/star-on.png';
import starOff from './img/raty/star-off.png';
import starHalf from './img/raty/star-half.png';

const REVIEWS_URL = 'https://paw-hut.b.goit.study/api/feedbacks';
const reviewsContainer = document.getElementById('feedbacks-list');

async function fetchReviews() {
  try {
    const response = await axios.get(REVIEWS_URL);
    // Беремо дані з feedbacks
    return response.data.feedbacks || [];
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
         <div class="raty-rating" data-score="${rating}"></div>
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

  const ratingElements = document.querySelectorAll('.raty-rating');

  ratingElements.forEach(element => {
    const score = element.dataset.score;

    new Raty(element, {
      starType: 'img',
      starOn: starOn,
      starOff: starOff,
      starHalf: starHalf,
      half: true,
      readOnly: true,
      score: score,
      space: false,
    }).init();
  });
  new Swiper('.reviews-slider', {
    modules: [Navigation, Pagination],
    speed: 500,
    spaceBetween: 16,
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 16 },
      768: { slidesPerView: 2, spaceBetween: 16 },
      1440: { slidesPerView: 3, spaceBetween: 28 },
    },
    pagination: {
      el: '.reviews-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.reviews-btn-next',
      prevEl: '.reviews-btn-prev',
    },
  });
}

initReviewsSection();
