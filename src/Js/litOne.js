import { html, css, LitElement } from 'lit';

export class productos extends LitElement {
    constructor() {
        super()
    }
    static styles = css`~`;

    render() {
        return html`
        <div class="producto Abrigo">
            <img src="Storage/img/abrigos/01.png" alt="">
            <div>
                <p>Abrigo 01</p>
                <span>
                    <p>$ 1300</p>
                    <button>
                        Agregar
                    </button>
                </span>
            </div>
        </div> 
        `
    };
}

export class Barra extends LitElement {
    constructor() {
        super()
    }
    static styles = css`~`;

    render() {
        return html`
        <ul>
            <li><a href="src/views/carrito.html">Carrito</a></li>
        </ul>
        <p>2023 Camper</p>
        `
    };
}


