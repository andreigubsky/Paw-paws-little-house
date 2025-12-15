// render-function.js
import '/css/animations.css';

const refs = {
  gallery: document.querySelector('.js-gallery'),
  loadMoreButton: document.querySelector('.js-loadmore-btn'),
  loader: document.querySelector('.js-loader'),
};

export function createGallery(images) {
  const markup = images
    .map(({}) => {
      return `<li class="gallery-item">
                  // тут HTML розмітка однієї картки
                </li>`;
    })
    .join('');
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

export function clearGallery() {
  refs.gallery.innerHTML = '';
}

export function showLoader() {
  refs.gallery.classList.remove('is-shown');
  refs.loader.classList.add('is-shown');
}

export function hideLoader() {
  refs.loader.classList.remove('is-shown');
  refs.gallery.classList.add('is-shown');
}

export function showLoadMoreButton() {
  refs.loadMoreButton.classList.add('is-shown');
}

export function hideLoadMoreButton() {
  refs.loadMoreButton.classList.remove('is-shown');
}

import fullStar from '../img/SVG/star-filled.svg';
import halfStar from '../img/SVG/star-half.svg';
import emptyStar from '../img/SVG/star-outline.svg';

export function renderStars(container, score, maxStars = 5) {
  container.innerHTML = '';
  const roundedScore = Math.round(score * 2) / 2;

  for (let i = 1; i <= maxStars; i++) {
    const img = document.createElement('img');
    img.className = 'icon-star'; // Клас для CSS стилів
    img.alt = 'star rating';

    if (roundedScore >= i) {
      img.src = fullStar; // Повна зірка
    } else if (roundedScore >= i - 0.5) {
      img.src = halfStar; // Половинка
    } else {
      img.src = emptyStar; // Пуста
    }

    container.appendChild(img);
  }
}
