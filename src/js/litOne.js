import { html, css, LitElement } from 'lit';

export class productos extends LitElement {
    constructor() {
        super()
    }
    static styles = css`
    .producto {
        /* max-height: 50%; */
        /* max-width: 50%; */
    
        display: flex;
        flex-direction: column;
        justify-content: center;
    
        /* overflow: hidden; */
    
        border: 1px solid var(--color-producto);
        background: var(--color-producto);
        border-radius: 1em;
    }
    
    .producto img {
        padding: .5em;
        max-height: 70%;
        max-width: 100%;
    }
    
    .producto div {
        flex-grow: 1;
    
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    
        border: 2px solid var(--color-Boton);
        border-radius: 1em;
        padding: 0.5em;
    
        background: var(--color-fondo);
        color: var(--color-Boton);
    }
    
    .producto div span {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    button {
        height: 2em;
        width: 7em;
    
        border-radius: .5em;
        background: var(--color-Boton);
        color: var(--color-Boton-letras);
    }
    `;

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
    static styles = css`
    `;

    render() {
        return html`
        <ul>
            <li><a href="src/views/carrito.html">Carrito</a></li>
        </ul>
        <p>2023 Camper</p>
        `
    };
}


