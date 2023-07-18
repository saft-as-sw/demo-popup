import { PopupCustom } from "./popup-custom.js";


const popup = new PopupCustom();

document.querySelectorAll(".popup-source")
    .forEach((el) => popup.attachPopupToElement(el));