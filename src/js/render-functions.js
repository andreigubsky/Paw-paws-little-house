// render-function.js
import '/css/animations.css';

const refs = {
    gallery: document.querySelector('.js-gallery'),
    loadMoreButton: document.querySelector('.js-loadmore-btn'),
    loader: document.querySelector('.js-loader'),
  };


export function createGallery(images) {
    const markup = images
      .map(({  }) => {
        return `<li class="gallery-item">
                  // тут HTML розмітка однієї картки
                </li>`;
      })
      .join('');
    refs.gallery.insertAdjacentHTML('beforeend', markup);
 
  }
  
  export function clearGallery() {
    refs.gallery.innerHTML = "";
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