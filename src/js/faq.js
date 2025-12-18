import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

const base = import.meta.env.BASE_URL;
new Accordion('.accordion-container', {
    duration: 400,
    showMultiple: false,
    onOpen: (currentElement) => {
        const icon = currentElement.querySelector(".faq-icon-use");
        icon.href.baseVal = `${base}img/sprite.svg#icon-close`;
    },
    onClose: (currentElement) => {
        const icon = currentElement.querySelector(".faq-icon-use");
        icon.href.baseVal = `${base}img/sprite.svg#icon-add`;
    }
}); 