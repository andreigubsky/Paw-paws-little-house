import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

new Accordion('.accordion-container', {
    duration: 400,
    showMultiple: false,
    onOpen: (currentElement) => {
        const icon = currentElement.querySelector("use");
        icon.href.baseVal = "../img/sprite.svg#javascript";
    },
    onClose: (currentElement) => {
        const icon = currentElement.querySelector("use");
        icon.href.baseVal = "../img/sprite.svg#logo";
    }
}); 