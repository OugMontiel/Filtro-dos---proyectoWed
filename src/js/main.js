import {
    getAbrigo,
    getCamiseta,
    getPantalon,
    getCarrito
} from "./bd.js";
import { crud } from "./escuchaActiva.js";
import { 
    Barra, 
    productos 
} from "./litOne.js";


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

let navegacion = document.querySelectorAll('.Menuli')
navegacion.forEach(item => {
    item.addEventListener("click", (e) => {
        navegacion.forEach(boton => boton.classList.remove("Selecion"));
        e.currentTarget.classList.add("Selecion");
    });
});

