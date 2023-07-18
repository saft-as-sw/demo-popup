import { PopupManager } from "./popup-manager.js";


const popupManager = new PopupManager();

document.querySelectorAll(".popup-source")
    .forEach((el) => popupManager.attachPopupToElement(el));