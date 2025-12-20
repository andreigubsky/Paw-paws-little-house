import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";
import imgUrlAdd from '/img/sprite.svg#icon-add'
import imgUrlClose from '/img/sprite.svg#icon-close'

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 1500, // optional settings
    once: true,   // whether animation should happen only once - while scrolling down
});

new Accordion('.accordion-container', {
    duration: 400,
    showMultiple: false,
    onOpen: (currentElement) => {
        const icon = currentElement.querySelector(".faq-icon-use");
        icon.href.baseVal = imgUrlClose;
    },
    onClose: (currentElement) => {
        const icon = currentElement.querySelector(".faq-icon-use");
        icon.href.baseVal = imgUrlAdd;
    }
}); 