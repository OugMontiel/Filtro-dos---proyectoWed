import { LitElement, html, css } from 'lit-element';
import {
    getAbrigo,
    getCamiseta,
    getPantalon,
    getCarrito
} from "./bd.js";
import { 
    Barra, 
    productos 
} from "./litOne.js";

export class crud extends LitElement{
    static properties = {
        productosAbrigo: { type: Array },
        productosCamiseta: { type: Array },
        productosPantalon: { type: Array },
        productosCarrito: { type: Array },
        content: { type: Object },
    }
    constructor() {
        super()
        this.productosAbrigo = [];
        this.productosCamiseta = [];
        this.productosPantalon = [];
        this.productosCarrito = [];
        this.content=``;
        this.loadProducts();
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
    article {
        position: fixed; /* La ventana se mantiene fija en la pantalla */
        top: 2em; /* Distancia desde la parte superior */
        right: 2em; /* Distancia desde la parte derecha */
        z-index: 1000; /* Asegura que la ventana esté encima de otros elementos */
        background-color: var(--color-fondo); /* Color de fondo de la ventana */
        padding: 1em; /* Espacio interno de la ventana */
        box-shadow: 0 0 10px var(--color-producto); /* Sombra para resaltar la ventana */
        animation: ventanaTemporal 50s; /* Duración de la ventana */
      }
      
      @keyframes ventanaTemporal {
        0% { opacity: 1; } /* La ventana es visible al inicio */
        90% { opacity: 1; } /* La ventana permanece visible durante la mayor parte del tiempo */
        100% { opacity: 0; } /* La ventana desaparece al final */
      }
      
    `;
    add(){ return html`
        <article>
            <p>El articulo a sido agregado al carrito</p>
        </article>
    `}
    addAll(){ return html`
        <article>
            <p>El articulo a sido agregado al carrito</p>
        </article>
    `}
    drop(){ return html`
        <article>
            <p>El articulo a sido Eliminado del carrito</p>
        </article>
    `}
    dropAll(){ return html`
        <article>
            <p>Todos los articulos ah sido eliminados del carrito</p>
        </article>
    `}
    render() {
        return html`${this.content}`;
    }
    observeDomChanges() {
        const config = { childList: true, subtree: true };
        const callback = (mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    this.firstUpdated();
                }
            }
        };

        const observer = new MutationObserver(callback);
        observer.observe(this.shadowRoot, config);

        this.firstUpdated(); // Inicialmente agregar los event listeners
    }
    firstUpdated(){
        const botonAgregar = this.shadowRoot.querySelectorAll('.agregar');
        const iconoEliminar = this.shadowRoot.querySelectorAll('.eliminar');
        // const eliminarTodo = document.querySelector('#eliminarTodo');
        // const comprarTodo = document.querySelector('#comprarTodo');
        
        
        console.log("boton",botonAgregar);
        console.log("Icono",iconoEliminar);

        botonAgregar.forEach(item=>{
            item.addEventListener("click", (e) =>{
                this.content = this.add()
                this.requestUpdate()
            })
        })
        iconoEliminar.forEach(item=>{
            item.addEventListener("click", (e) =>{
                this.content = this.drop()
                this.requestUpdate()
            })
        })    
        // eliminarTodo.addEventListener('click', (e)=>{
        //     this.content = this.dropAll()
        //     this.requestUpdate()
        // });
        // comprarTodo.addEventListener('click', (e)=>{
        //     this.content = this.dropAll()
        //     this.requestUpdate()
        // });
        
      }
}

// Nesesito que escuche cuatro cosas ... el boton agregar ... el icono eliminar ... el boton eliminar todo y el boton comprar ... 


//  Necesito que cambia ... el contador del carrito ... el valor del total final a pagar 


//Nesecito hacer el crud respectivo para cada funcion De add ..drop .. dopAll y add all

// para ahcer un componente deberiamos mostral algun mensaje de confirmacion cada que se da click a cualquiera de estos elementos 