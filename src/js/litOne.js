import { html, css, LitElement } from 'lit';
import {
    getAbrigo,
    getCamiseta,
    getPantalon,
    getCarrito
} from "./bd.js";

export class productos extends LitElement {
    static properties = { //Se cargan las variables
        productosAbrigo: { type: Array },
        productosCamiseta: { type: Array },
        productosPantalon: { type: Array },
    }
    constructor() { //Se inicializan las variables
        super();
        this.productosAbrigo = [];
        this.productosCamiseta = [];
        this.productosPantalon = [];
        this.loadProducts(); //Esta es una funcion asincrona
    }
    async loadProducts() {
        try { 
            this.productosAbrigo = await getAbrigo();
            this.productosCamiseta = await getCamiseta();
            this.productosPantalon = await getPantalon();
            this.requestUpdate(); //es una función integrada de la clase LitElement. Cuando se llama a requestUpdate(), se programa una actualización del componente, lo que implica que render() se ejecutará de nuevo para actualizar el DOM con los datos más recientes
        } catch (error) {
            console.error('Error loading products:', error);
        }
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
            ${this.productosPantalon.map(producto => html`
                <div class="producto Abrigo">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div>
                  <p>${producto.nombre}</p>
                  <span>
                    <p>$${producto.precio}</p>
                    <button>Agregar</button>
                  </span>
                </div>
              </div>
            
            `)}
        
        `
      }

}

export class Barra extends LitElement {
    constructor() {
        super()
    }
    static styles = css`
                `;

    render() {
        return html`
            < ul >
            <li><a href="src/views/carrito.html">Carrito</a></li>
        </ul >
            <p>2023 Camper</p>
        `
    };
}


