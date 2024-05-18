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


customElements.define("barra-dos", Barra);
customElements.define("productos-disponibles", productos);
getCarrito().then(data => {
    console.log('getCarrito result:', data);
}).catch(error => {
    console.error('Error fetching data:', error);
});

function Desplegable() {
    var btn = document.getElementById("Menu");
    btn.classList.toggle("visible");
} 

