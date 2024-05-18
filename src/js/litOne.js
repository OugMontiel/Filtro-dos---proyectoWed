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
    :host{
        padding:1em;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
    .producto {
        margin:.5em;

        display: flex;
        flex-direction: column;
        justify-content: center;
    
        overflow: hidden;
    }
    
    .producto img {
        max-width:100%;
        max-height:13em;
        border-radius:1em;
    }
    
    .producto div {    
        display: flex;
        flex-direction: column;

        margin-top:-2em;
    
        border-radius: 1em;
        padding: 0.5em;
    
        background: var(--color-producto);
        color: var(--color-w);
    }
    small{
        display: -webkit-box; /* Establece un contenedor flex de tipo caja */
            -webkit-box-orient: vertical; /* Establece la orientación vertical */
            -webkit-line-clamp: 2; /* Limita el texto a dos líneas */
    
        overflow: hidden; /* Oculta cualquier texto que desborde el contenedor */
        text-overflow: ellipsis; /* Agrega puntos suspensivos al final del texto que se trunca */
    }
    p{
        margin:0;
        padding:0;

        color: var(--color-Boton-letras);
    }
    button {
        padding:.5em;
        border-radius: 2em;
        background: var(--color-w);
        color: var(--color-fondo);
    }
    `;
    render() {
        return html`
            ${this.productosPantalon.map(producto => html`
            <div class="producto">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div>
                    <small>${producto.nombre}</small>
                    <p>$ ${producto.precio}</p>
                    <button>Agregar</button>
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


