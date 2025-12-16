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
        ×
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

          <button class="take-home js-takehome-btn">
            Взяти додому
          </button>
        </div>
      </div>
    </div>
  `;
}
