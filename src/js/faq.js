import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";
import imgUrl from '/img/sprite.svg'
import imgUrlClose from '/img/sprite.svg#icon-close'


new Accordion('.accordion-container', {
    duration: 400,
    showMultiple: false,
    onOpen: (currentElement) => {
        const icon = currentElement.querySelector(".faq-icon-use");
        icon.href.baseVal = imgUrlClose;
    },
    onClose: (currentElement) => {
        const icon = currentElement.querySelector(".faq-icon-use");
        icon.href.baseVal = `${imgUrl}#icon-add`;
    }
}); 