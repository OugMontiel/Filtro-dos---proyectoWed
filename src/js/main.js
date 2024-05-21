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
import { crud } from "./escuchaActiva.js";
// import * as nombreModulo from "./prueva.js";


customElements.define("productos-carrito", Barra);
customElements.define("productos-disponibles", productos);
customElements.define("escucha-activa",crud)
// getCarrito().then(data => {
//     console.log('getCarrito result:', data);
// }).catch(error => {
//     console.error('Error fetching data:', error);
// });

function Desplegable() {
    var btn = document.getElementById("Menu");
    btn.classList.toggle("visible");
} 