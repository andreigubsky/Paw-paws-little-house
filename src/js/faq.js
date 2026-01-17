import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import sprite from '../img/sprite.svg?url';
// import imgUrlAdd from '/img/sprite.svg#icon-add';
// import imgUrlClose from '/img/sprite.svg#icon-close';
const imgUrlAdd = '/img/sprite.svg#icon-add';
const imgUrlClose = '/img/sprite.svg#icon-close';

// import AOS from 'aos';
// import 'aos/dist/aos.css';

// AOS.init({
//   duration: 1500, // optional settings
//   once: true, // whether animation should happen only once - while scrolling down
// });

new Accordion('.accordion-container', {
  duration: 400,
  showMultiple: false,
  onOpen: currentElement => {
    const icon = currentElement.querySelector('.faq-icon-use');
    icon.setAttribute('href', imgUrlClose);
  },
  onClose: currentElement => {
    const icon = currentElement.querySelector('.faq-icon-use');
    icon.setAttribute('href', imgUrlAdd);
  },
});
