export class DummyComponent extends HTMLElement {

    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });
        const main = document.createElement('div');
        main.classList.add('main');
        shadow.appendChild(main);

        const red = document.createElement('div');
        red.classList.add('box');
        red.classList.add('red');
        main.appendChild(red);

        const blue = document.createElement('div');
        blue.classList.add('box');
        blue.classList.add('blue');
        main.appendChild(blue);

        const style = document.createElement('style');
        style.textContent = STYLE;
        shadow.appendChild(style);
    }
}

customElements.define('dummy-component', DummyComponent);


const STYLE = `

.main {
    border: dashed 1px;
    padding: 5px;
}

.box {
    border: solid 3px;
    width: 20px;
    height: 20px;
    margin: 5px;
}

.red {
    background-color: red;
}

.blue {
    background-color: blue;
}

`;