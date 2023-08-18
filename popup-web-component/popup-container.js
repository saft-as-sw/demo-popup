export class PopupContainer extends HTMLElement {

    #popupBackground = undefined;
    #popupContent = undefined;
    poppingElement = undefined;

    constructor(component) {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        this.#popupBackground = document.createElement("div");
        this.#popupBackground.classList.add("popup-background");
        shadow.appendChild(this.#popupBackground);

        this.#popupContent = document.createElement("div");
        this.#popupContent.classList.add("popup-content");
        this.#popupContent.appendChild(component);
        this.#popupBackground.appendChild(this.#popupContent);

        const style = document.createElement("style");
        style.textContent = STYLE;
        this.#popupBackground.appendChild(style);

        window.addEventListener("click", (event) => {
            if (event.target === this.#popupBackground) {
                const customEventCickOutside = new CustomEvent("clickoutside", {
                    composed: true,
                    bubbles: true
                });
                this.dispatchEvent(customEventCickOutside);
            }
        });
    }

    attachPopupToElement(element) {
        element.addEventListener(
            "click", (event) => this.#openPopupAtClickOnElement(event)
        );
    }

    close() {
        this.#popupBackground.remove();
    }

    #openPopupAtClickOnElement(event) {
        this.poppingElement = event.target;

        const x = event.clientX;
        const y = event.clientY;

        this.#popupContent.style.left = `${x}px`;
        this.#popupContent.style.top = `${y}px`;

        document.body.appendChild(this.#popupBackground);
    }

}

customElements.define('popup-container', PopupContainer);

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
    background-color: cyan;
    position: absolute;
    width: auto;
    height: auto;
}
`;