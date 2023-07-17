export class PopupManager {

    #popupBackground = undefined;
    #popupContent = undefined;

    constructor() {
        this.#popupBackground = document.createElement("div");
        this.#popupBackground.classList.add("popup-background");

        this.#popupContent = document.createElement("div");
        this.#popupContent.classList.add("popup-content");
        this.#popupBackground.appendChild(this.#popupContent);

        window.addEventListener("click", (event) => {
            if (event.target === this.#popupBackground) {
                this.#hidePopup();
            }
        });
    }

    attachPopupToElement(element) {
        element.addEventListener("click", (event) => this.#openPopupAtClickOnElement(event));
    }

    #openPopupAtClickOnElement(event) {
        const x = event.clientX;
        const y = event.clientY;

        this.#popupContent.style.left = `${x}px`;
        this.#popupContent.style.top = `${y}px`;

        document.body.appendChild(this.#popupBackground);
    }

    #hidePopup() {
        this.#popupBackground.remove();
    }
}
