import {
    getAll,
    getAbrigo,
    getCamiseta,
    getPantalon,
    getCarrito
} from "./bd.js";


function Desplegable() {
    var btn = document.getElementById("Menu");
    btn.classList.toggle("visible");
} 