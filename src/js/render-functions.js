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

//!================================================

export function createTemplateCategory(category) {
  return `
    <li class="pet-category-item">
      <button class="pet-category-btn" data-category="${category._id}">
        ${category.name}
      </button>
    </li>
  `;
}

export function createTemplateCategories(categories) {
  const allBtn = `
    <li class="pet-category-item ">
      <button class="pet-category-btn" data-category="all">
        Всі
      </button>
    </li>
  `;

  return allBtn + categories.map(createTemplateCategory).join('');
}

export function createTemplatePet(pet) {
  const categoriesMarkup = pet.categories
    .map(cat => `<li class="pet-card__group">${cat.name}</li>`)
    .join('');

  return `
  <li class="pet-card">
    <div class="pet-card__container">
        <img class="pet-card__image" src="${pet.image}" alt="${pet.name}" loading="lazy"/>
      
        <p class="pet-card__species">${pet.species}</p>

        <h2 class="pet-card__name">${pet.name}</h2>

        <ul class="pet-card__groups">
          ${categoriesMarkup}
        </ul>
      
        <p class="pet-card__meta">
          <span class="pet-card__meta-item">${pet.age}</span>
          <span class="pet-card__meta-item">${pet.gender}</span>
        </p>
    
        <p class="pet-card__description">
          ${pet.shortDescription}
        </p>
      
        <button class="pet-card__button js-more-info" data-id="${pet._id}">
          Дізнатись більше
        </button>
    </div>
  </li>
  `;
}

export function createTemplatePets(pets) {
  return pets.map(createTemplatePet).join('');
}
//!================================================
export function createModalTemplate(pet) {
  return `
    <div class="pet-modal">
      <button
        type="button"
        class="pet-modal-close js-modal-close"
        aria-label="Close modal"
      >
        <svg width="24" height="24">
            <use href="/img/sprite.svg#icon-close" width="24" height="24"></use>
          </svg>
      </button>

      <div class="pet-modal-content">
        <div class="pet-modal-image">
          <img src="${pet.image}" alt="${pet.name}" />
        </div>

        <div class="pet-modal-info">
          <p class="pet-modal-species">${pet.species}</p>

          <h2 class="pet-modal-name">${pet.name}</h2>

          <p class="pet-modal-meta">
            <span>${pet.age}</span>
            <span>${pet.gender}</span>
          </p>

          <h3>Опис:</h3>
          <p>${pet.description}</p>

          <h3>Здоровʼя:</h3>
          <p>${pet.healthStatus}</p>

          <h3>Поведінка:</h3>
          <p>${pet.behavior}</p>

          <button class="take-home js-takehome-btn" data-id="${pet._id}">
            Взяти додому
          </button>
        </div>
      </div>
    </div>
  `;
}

import fullStar from '/img/SVG/star-filled.svg';
import halfStar from '/img/SVG/star-half.svg';
import emptyStar from '/img/SVG/star-outline.svg';
export function renderStars(container, score, maxStars = 5) {
  container.innerHTML = '';
  const roundedScore = Math.round(score * 2) / 2;
  for (let i = 1; i <= maxStars; i++) {
    const img = document.createElement('img');
    img.className = 'icon-star';
    img.alt = 'star rating';
    if (roundedScore >= i) {
      img.src = fullStar;
    } else if (roundedScore >= i - 0.5) {
      img.src = halfStar;
    } else {
      img.src = emptyStar;
    }
    container.appendChild(img);
  }
}
