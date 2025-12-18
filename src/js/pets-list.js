import { getAnimals, getAnimalsByQuery } from './paw-hut-api-animals';
import { getCategories } from './paw-hut-api-categories';
import {
  createTemplateCategories,
  createTemplatePets,
} from './render-functions';
import { renderPagination } from './pagination';
import { scrollToCategories } from './scroll';

// ================== GLOBAL STORAGE ==================
export const allAnimals = []; // ← ГЛОБАЛЬНИЙ МАСИВ

//!================================================
const refs = {
  showMoreBtn: document.querySelector('.js-pet-show-more-btn'),
  petList: document.querySelector('.js-pet-list'),
  petCategories: document.querySelector('.js-pet-categories'),
  showDetailsBtn: document.querySelector('.js-more-info'),
  pagination: document.querySelector('.js-pet-pagination'),
};

refs.showMoreBtn.disabled = true;

function getPerPage() {
  return window.innerWidth >= 1440 ? 9 : 8;
}

function isMobile() {
  return window.innerWidth < 768;
}

let page = 1;
let perPage = getPerPage();
let query = 'all';
let totalPages = 1;
//!================================================

// ----------- LOAD CATEGORIES -----------
document.addEventListener('DOMContentLoaded', async () => {
  const response = await getCategories();
  perPage = getPerPage();
  refs.petCategories.innerHTML = createTemplateCategories(
    response.sort().reverse()
  );

  const allBtn = refs.petCategories.querySelector('[data-category="all"]');
  allBtn.closest('.pet-category-item').classList.add('is-active');
});

// ----------- FIRST LOAD PETS -----------
document.addEventListener('DOMContentLoaded', async () => {
  const response = await getAnimals(page, perPage);

  allAnimals.length = 0; // 🔴 очистка
  allAnimals.push(...response.animals); // ✅ зберігаємо

  refs.petList.innerHTML = createTemplatePets(response.animals);
  refs.showMoreBtn.disabled = response.animals.length < perPage;
  refs.petList.innerHTML = createTemplatePets(response.animals);

  totalPages = Math.ceil(response.totalItems / response.limit);

  if (isMobile()) {
    refs.showMoreBtn.disabled = response.animals.length < perPage;
    refs.pagination.innerHTML = '';
  } else {
    refs.showMoreBtn.classList.add('is-hidden');
    refs.showMoreBtn.disabled = true;

    renderPagination({
      container: refs.pagination,
      current: page,
      total: totalPages,
    });
  }
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

  allAnimals.length = 0; // 🔴 очистка
  allAnimals.push(...response.animals); // ✅ нові дані

  refs.petList.innerHTML = createTemplatePets(response.animals);

  totalPages = Math.ceil(response.totalItems / response.limit);

  if (isMobile()) {
    refs.showMoreBtn.classList.remove('is-hidden');
    refs.showMoreBtn.disabled = response.animals.length < perPage;
    refs.pagination.innerHTML = '';
  } else {
    refs.showMoreBtn.classList.add('is-hidden');
    refs.showMoreBtn.disabled = true;

    renderPagination({
      container: refs.pagination,
      current: page,
      total: totalPages,
    });

    scrollToCategories(refs.petCategories);
  }
});

// ----------- SHOW MORE -----------
refs.showMoreBtn.addEventListener('click', async () => {
  if (!isMobile()) return;

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
  const elem = document.querySelector('.js-pet-list div.pet-card__container');
  if (!elem) return;
 
  const heightOfElem = elem.getBoundingClientRect().height ;

  window.scrollBy({
    top: heightOfElem,
    behavior: 'smooth',
  });
}

//!================================================
refs.pagination.addEventListener('click', async e => {
  const btn = e.target.closest('button');
  if (!btn) return;

  if (btn.hasAttribute('disabled')) return;

  let nextPage = page;

  if (btn.dataset.page) {
    nextPage = Number(btn.dataset.page);
  }

  if (btn.dataset.nav === 'prev') nextPage = page - 1;
  if (btn.dataset.nav === 'next') nextPage = page + 1;

  if (!Number.isFinite(nextPage) || nextPage < 1 || nextPage > totalPages)
    return;
  if (nextPage === page) return;

  page = nextPage;
  perPage = getPerPage();

  const response =
    query === 'all'
      ? await getAnimals(page, perPage)
      : await getAnimalsByQuery(query, page, perPage);

  refs.petList.innerHTML = createTemplatePets(response.animals);

  totalPages = Math.ceil(response.totalItems / response.limit);

  renderPagination({
    container: refs.pagination,
    current: page,
    total: totalPages,
  });

  scrollToCategories(refs.petCategories);
});
