import { getAnimals, getAnimalsByQuery } from './paw-hut-api-animals';
import { getCategories } from './paw-hut-api-categories';
import {
  createTemplateCategories,
  createTemplatePets,
} from './render-functions';

// ================== GLOBAL STORAGE ==================
export const allAnimals = []; // ← ГЛОБАЛЬНИЙ МАСИВ

//!================================================
const refs = {
  showMoreBtn: document.querySelector('.js-pet-show-more-btn'),
  petList: document.querySelector('.js-pet-list'),
  petCategories: document.querySelector('.js-pet-categories'),
};

refs.showMoreBtn.disabled = true;

function getPerPage() {
  return window.innerWidth >= 1440 ? 9 : 8;
}

let page = 1;
let perPage = getPerPage();
let query = 'all';
//!================================================

// ----------- LOAD CATEGORIES -----------
document.addEventListener('DOMContentLoaded', async () => {
  const response = await getCategories();
  perPage = getPerPage();
  refs.petCategories.innerHTML =
    createTemplateCategories(response.sort().reverse());

  const allBtn = refs.petCategories.querySelector('[data-category="all"]');
  allBtn.closest('.pet-category-item').classList.add('is-active');
});

// ----------- FIRST LOAD PETS -----------
document.addEventListener('DOMContentLoaded', async () => {
  const response = await getAnimals(page, perPage);

  allAnimals.length = 0;                 // 🔴 очистка
  allAnimals.push(...response.animals);  // ✅ зберігаємо

  refs.petList.innerHTML = createTemplatePets(response.animals);
  refs.showMoreBtn.disabled = response.animals.length < perPage;
});

// ----------- CHANGE CATEGORY -----------
refs.petCategories.addEventListener('click', async e => {
  if (e.target.nodeName !== 'BUTTON') return;

  refs.petCategories
    .querySelectorAll('.pet-category-item')
    .forEach(item => item.classList.remove('is-active'));

  e.target.closest('.pet-category-item').classList.add('is-active');

  query = e.target.dataset.category;
  page = 1;
  perPage = getPerPage();
  refs.showMoreBtn.disabled = false;

  let response;

  if (query === 'all') {
    response = await getAnimals(page, perPage);
  } else {
    response = await getAnimalsByQuery(query, page, perPage);
  }

  allAnimals.length = 0;                 // 🔴 очистка
  allAnimals.push(...response.animals);  // ✅ нові дані

  refs.petList.innerHTML = createTemplatePets(response.animals);
  refs.showMoreBtn.disabled = response.animals.length < perPage;
});

// ----------- SHOW MORE -----------
refs.showMoreBtn.addEventListener('click', async () => {
  page += 1;
  perPage = getPerPage();

  let response;

  if (query === 'all') {
    response = await getAnimals(page, perPage);
  } else {
    response = await getAnimalsByQuery(query, page, perPage);
  }

  allAnimals.push(...response.animals); // ✅ ДОДАЄМО В МАСИВ

  refs.petList.insertAdjacentHTML(
    'beforeend',
    createTemplatePets(response.animals)
  );

  if (response.animals.length < perPage) {
    refs.showMoreBtn.disabled = true;
  }

  scrollPage();
});

//!================================================
function scrollPage() {
  const elem = document.querySelector('.js-pet-list > *');
  if (!elem) return;

  const heightOfElem = elem.getBoundingClientRect().height * 2;

  window.scrollBy({
    top: heightOfElem,
    behavior: 'smooth',
  });
}
