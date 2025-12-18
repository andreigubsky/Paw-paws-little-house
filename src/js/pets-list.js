import { getAnimals, getAnimalsByQuery } from './paw-hut-api-animals';
import { getCategories } from './paw-hut-api-categories';
import {
  createTemplateCategories,
  createTemplatePets,
} from './render-functions';

//!================================================
const refs = {
  showMoreBtn: document.querySelector('.js-pet-show-more-btn'),
  petList: document.querySelector('.js-pet-list'),
  petCategories: document.querySelector('.js-pet-categories'),
  showDetailsBtn: document.querySelector('.js-more-info'),
};

refs.showMoreBtn.disabled = true;

function getPerPage() {
  return window.innerWidth >= 1440 ? 9 : 8;
}

let page = 1;
let perPage = getPerPage();
let query = 'all';
//!================================================

document.addEventListener('DOMContentLoaded', async () => {
  const response = await getCategories();
  perPage = getPerPage();
  const markup = createTemplateCategories(response.sort().reverse());
  refs.petCategories.innerHTML = markup;

  const allBtn = refs.petCategories.querySelector('[data-category="all"]');
  allBtn.closest('.pet-category-item').classList.add('is-active');
});

document.addEventListener('DOMContentLoaded', async e => {
  const response = await getAnimals(page, perPage);
  const markup = createTemplatePets(response.animals);
  refs.petList.innerHTML = markup;
  refs.showMoreBtn.disabled = response.animals.length < perPage;
});

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

  refs.petList.innerHTML = createTemplatePets(response.animals);

  refs.showMoreBtn.disabled = response.animals.length < perPage;
});

//!================================================

refs.showMoreBtn.addEventListener('click', async () => {
  page += 1;
  perPage = getPerPage();

  let response;

  if (query === 'all') {
    response = await getAnimals(page, perPage);
  } else {
    response = await getAnimalsByQuery(query, page, perPage);
  }

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

  const rect = elem.getBoundingClientRect();
  const heightOfElem = rect.height * 2;

  window.scrollBy({
    top: heightOfElem,
    behavior: 'smooth',
  });
}

//!================================================
