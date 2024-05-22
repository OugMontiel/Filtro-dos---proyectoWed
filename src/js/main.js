import {
    getAbrigo,
    getCamiseta,
    getPantalon,
    getCarrito
} from "./bd.js";
import { 
    Barra, 
    productos,
    buton 
} from "./litOne.js";
import { crud } from "./escuchaActiva.js";
// import * as nombreModulo from "./prueva.js";


customElements.define("productos-carrito", Barra);
customElements.define("productos-disponibles", productos);
customElements.define("escucha-activa",crud)
customElements.define("button-contador",buton)


function Desplegable() {
    var btn = document.getElementById("Menu");
    btn.classList.toggle("visible");
} 