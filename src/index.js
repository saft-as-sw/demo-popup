import { PopupManager } from "./popup-manager.js";
import { PopupContainer } from "./popup-container.js";

const popupManager = new PopupManager();
const popupContainer = new PopupContainer();

document.querySelectorAll(".first")
    .forEach((el) => popupManager.attachPopupToElement(el));

document.querySelectorAll(".second")
    .forEach((el) => popupContainer.attachPopupToElement(el));