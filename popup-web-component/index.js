import { PopupContainer } from "./popup-container.js";
import { DummyComponent } from "./dummy-component.js";

const dummyComponent = new DummyComponent();
const popupContainer = new PopupContainer(dummyComponent);

document.querySelectorAll(".popup-source")
    .forEach((el) => popupContainer.attachPopupToElement(el));

popupContainer.addEventListener("clickoutside", () => {
    if (popupContainer.poppingElement.classList.contains("optional")) {
        popupContainer.close();
    }
});