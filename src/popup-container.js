export class PopupContainer {

    #popupBackground = undefined;
    #popupContent = undefined;
    #component = undefined;

    constructor(component) {
        this.#popupBackground = document.createElement("div");
        this.#popupBackground.classList.add("popup-background");

        this.#popupContent = document.createElement("div");
        this.#popupContent.classList.add("popup-content");
        this.#popupBackground.appendChild(this.#popupContent);

        this.#component = component;
        this.#popupContent.appendChild(this.#component);

        const style = document.createElement("style");
        style.textContent = STYLE;
        this.#popupBackground.appendChild(style);

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

const STYLE = `
.popup-background {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
}

.popup-content {
    position: absolute;
}
`;