import {
    getAll,
    getAbrigo,
    getCamiseta,
    getPantalon,
    getCarrito
} from "./bd.js";
import { 
    Barra, 
    productos 
} from "./litOne.js";


customElements.define("barra-dos", Barra);
customElements.define("productos-disponibles", productos);

function Desplegable() {
    var btn = document.getElementById("Menu");
    btn.classList.toggle("visible");
} 