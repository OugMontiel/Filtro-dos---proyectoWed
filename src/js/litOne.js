import { html, css, LitElement } from 'lit';
import {
    getAbrigo,
    getCamiseta,
    getPantalon,
    getCarrito
} from "./bd.js";
import { 
    agregarAlCarrito,
    eliminarDelCarrito
 } from './prueva.js';

export class productos extends LitElement {
    static properties = { //Se cargan las variables
        productosAll: { type: Array },
        productosAbrigo: { type: Array },
        productosCamiseta: { type: Array },
        productosPantalon: { type: Array },
        productosCarrito: { type: Array },
        currentFilter: { type: String },
    }
    constructor() { //Se inicializan las variables
        super();
        this.productosAll = [];
        this.productosAbrigo = [];
        this.productosCamiseta = [];
        this.productosPantalon = [];
        this.productosCarrito = []
        this.currentFilter = "productosAll"; // Inicializa currentFilter como una cadena vacía en lugar de un array
        this.loadProducts(); //Esta es una funcion asincrona
    }
    async loadProducts() {
        try {
            this.productosAbrigo = await getAbrigo();
            this.productosCamiseta = await getCamiseta();
            this.productosPantalon = await getPantalon();
            this.productosCarrito = await getCarrito()
            this.productosAll = [
                ...this.productosAbrigo,
                ...this.productosCamiseta,
                ...this.productosPantalon
            ];
            this.currentFilter = "productos" + document.querySelector(".Selecion").id; // Añade "producto " antes del id
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
        height:15em;
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
    connectedCallback() {
        super.connectedCallback();
        const navegacion = document.querySelectorAll('.Menuli');
        navegacion.forEach(item => {
            item.addEventListener("click", (e) => {
                const selectedId = e.currentTarget.id;
                this.currentFilter = "productos" + selectedId;
                this.requestUpdate();
            });
        });
        let colorNavegacion = document.querySelectorAll('.Menuli')
        colorNavegacion.forEach(item => {
            item.addEventListener("click", (e) => {
                colorNavegacion.forEach(boton => boton.classList.remove("Selecion"));
                e.currentTarget.classList.add("Selecion");
            });
        });
    }
    render() {
        const productos = this[this.currentFilter]// Coloca currentFilter dentro de un array para que funcione con el método map       
        return html` 
            ${productos.map(producto => html`
            <div class="producto" data-id="${producto.id}">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div>
                    <small>${producto.nombre}</small>
                    <p>$ ${producto.precio.toLocaleString()}</p>
                    <button @click="${this.handleProductosAllUpdated}" class="agregar">AGREGAR</button>
                </div>
              </div>
            
            `)}
        
        `
    }
    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has('currentFilter')) {
            this.handleProductosAllUpdated();
        }
    }
    verificarExistencia(key, valor) {
        // Validar y actualizar el JSON
        const data = this.productosCarrito;
        for (const element of data) {
            for (const clave in element) {
                if (clave === key) {
                    if (element[clave] === valor) {
                        valor = Element.cantidad + 1
                        // Elimine este Elemento 
                        return valor
                    }
                }
            }
        }
        return 1
    }


    handleProductosAllUpdated(e) {
        let id = e.target.parentElement.parentElement.dataset.id;
        let json = {};
        let partes = id.split("-");
        let primeraParte = partes[0]; // "abrigo"
        let segundaParte = partes[1];
        json[`${primeraParte}Id`] = parseInt(segundaParte);
        let cantidadDatos = Object.keys(this.productosCarrito).length;
        json["id"] = parseInt(cantidadDatos);
        let primeraKey = Object.keys(json)[0];
        let cantidad = this.verificarExistencia(primeraKey, parseInt(segundaParte))
        console.log(cantidad);
        json["cantidad"] = parseInt(cantidad);
        this.loadProducts()
    }
}

export class Barra extends LitElement {
    static properties = {
        productosAbrigo: { type: Array },
        productosCamiseta: { type: Array },
        productosPantalon: { type: Array },
        productosCarrito: { type: Array },
        dato: { type: Array },
    }
    constructor() {
        super()
        this.productosAbrigo = [];
        this.productosCamiseta = [];
        this.productosPantalon = [];
        this.productosCarrito = []
        this.dato = []
        this.loadProducts()
    }
    async loadProducts() {
        try {
            this.productosAbrigo = await getAbrigo();
            this.productosCamiseta = await getCamiseta();
            this.productosPantalon = await getPantalon();
            this.productosCarrito = await getCarrito();
            this.requestUpdate();
        } catch (error) {
            console.error("Error loading products:", error);
        }
    }
    static styles = css`
        .producto {
            display: flex;
            justify-content: space-between;
            align-items: center;

            background: var(--color-producto);
            border-radius: 1em;

            margin:1em;
            padding: 0 1em;
            height:4.5em;
        }
        .producto img {
            max-width:100%;
            max-height:100%;
            border-radius:1em;
        }
        .producto div {
            display: flex;
            flex-direction: column;
            justify-content: center;

        }
        .producto small{
            color:var(--color-Boton-letras);
            font-size:.9em;
        }
        marquee{
            max-width:8em;
            color:var(--color-letras);
            font-size:.9em;
        }
        .producto p {
            display: flex;
            justify-content: center;
            align-items: center;

            color:var(--color-letras);
            font-size:.9em;

            margin:.2em;
        }
        
    `;
    contenidoHTML(base, producto, eliminador) {
        return html`
        <div class="producto ">
            <img src="${base.imagen}" alt="${base.nombre}">
            <div>
                <small>Titulo</small>
                <marquee behavior="scroll" direction="left" style="white-space: nowrap; overflow: hidden;">
                ${base.nombre}
                </marquee>
            </div>
            <div>
                <small>Cantidad</small>
                <p>${producto.cantidad}</p>
            </div>
            <div>
                <small>Precio</small>
                <p>$ ${base.precio.toLocaleString()}</p>
            </div>
            <div>
                <small>SubTotal</small>
                <p>$ ${(producto.cantidad * base.precio).toLocaleString()}</p>
            </div>
            <a @click="${this.handleProductosAllUpdated}" data-id="${eliminador}" class"eliminar" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #58720b;transform: ;msFilter:;"><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path><path d="M9 10h2v8H9zm4 0h2v8h-2z"></path></svg>
            </a>
            </div>    
        `;
    }
    handleProductosAllUpdated(e){
        let id=e.currentTarget.dataset.id;
        eliminarDelCarrito(id)
        this.requestUpdate();
    }
    render() {
        return html`
        ${this.productosCarrito.map(producto => {
            if (Object.keys(producto)[0] === "abrigoId") {
                this.dato = this.productosAbrigo.filter(item => {
                    let id = item.id.toString(); // Convertir el id en una cadena
                    let partes = id.split("-"); // Dividir la cadena en partes utilizando el guión "-"
                    let ultimaParte = partes[partes.length - 1]; // Obtener la última parte de la cadena
                    return parseFloat(ultimaParte) === producto.abrigoId
                });
                return this.contenidoHTML(...this.dato, producto, producto.id);
            }
            if (Object.keys(producto)[0] === "pantalonId") {
                this.dato = this.productosPantalon;
                this.dato = this.productosAbrigo.filter(item => {
                    let id = item.id.toString(); // Convertir el id en una cadena
                    let partes = id.split("-"); // Dividir la cadena en partes utilizando el guión "-"
                    let ultimaParte = partes[partes.length - 1]; // Obtener la última parte de la cadena
                    return parseFloat(ultimaParte) === producto.pantalonId
                });
                return this.contenidoHTML(...this.dato, producto, producto.id);
            }
            if (Object.keys(producto)[0] === "camisetaId") {
                this.dato = this.productosCamiseta;
                this.dato = this.productosAbrigo.filter(item => {
                    let id = item.id.toString(); // Convertir el id en una cadena
                    let partes = id.split("-"); // Dividir la cadena en partes utilizando el guión "-"
                    let ultimaParte = partes[partes.length - 1]; // Obtener la última parte de la cadena
                    return parseFloat(ultimaParte) === producto.camisetaId
                });
                return this.contenidoHTML(...this.dato, producto, producto.id);
            }
        })}
        `;
    }
}