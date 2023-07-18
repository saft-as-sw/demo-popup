import { PopupManager } from "./popup-manager.js";
import { PopupContainer } from "./popup-container.js";
import { DummyComponent } from "./dummy-component.js";

const dummyComponent = new DummyComponent();

const popupManager = new PopupManager();
const popupContainer = new PopupContainer(dummyComponent);

// popupContainer.attachComponent(dummyComponent);

document.querySelectorAll(".first")
    .forEach((el) => popupManager.attachPopupToElement(el));

document.querySelectorAll(".second")
    .forEach((el) => popupContainer.attachPopupToElement(el));