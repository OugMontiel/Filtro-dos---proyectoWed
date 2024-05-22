
// Obtén todos los elementos del carrito
export const getCarrito = async () => {
    try {
        let res = await fetch("http://172.16.101.146:5499/carrito");
        let data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
        throw new Error("Error al obtener el carrito");
    }
};

// Agrega un elemento al carrito
export const agregarAlCarrito = async (item) => {
    try {
        // Realiza la petición POST para agregar el elemento al carrito
        let res = await fetch("http://172.16.101.146:5499/carrito", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
        throw new Error("Error al agregar el elemento al carrito");
    }
};

// Actualiza un elemento del carrito
export const actualizarCarrito = async (itemId, newItem) => {
    try {
        // Realiza la petición PUT para actualizar el elemento del carrito
        let res = await fetch(`http://172.16.101.146:5499/carrito/${itemId}`, {
            method: 'PUT',
            body: JSON.stringify(newItem),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
        throw new Error("Error al actualizar el elemento del carrito");
    }
};

// Elimina un elemento del carrito
export const eliminarDelCarrito = async (itemId) => {
    try {
        // Realiza la petición DELETE para eliminar el elemento del carrito
        let res = await fetch(`http://172.16.101.146:5499/carrito/${itemId}`, {
            method: 'DELETE'
        });
        let data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
        throw new Error("Error al eliminar el elemento del carrito");
    }
};


// Ejemplo de uso de las funciones
(async () => {
    try {
        // Obtén el carrito
        let carrito = await getCarrito();
        console.log("Carrito:", carrito);

        // Agrega un elemento al carrito
        let nuevoItem = {
            "abrigoId": 5,
            "cantidad": 1,
            "id": 4
        };
        let resultadoAgregar = await agregarAlCarrito(nuevoItem);
        console.log("Resultado de agregar al carrito:", resultadoAgregar);

        // Actualiza un elemento del carrito
        let itemId = 2;
        let nuevoItemActualizado = {
            "pantalonId": 2,
            "cantidad": 3,
            "id": itemId
        };
        let resultadoActualizar = await actualizarCarrito(itemId, nuevoItemActualizado);
        console.log("Resultado de actualizar el carrito:", resultadoActualizar);

        // Elimina un elemento del carrito
        let itemIdEliminar = 3;
        let resultadoEliminar = await eliminarDelCarrito(itemIdEliminar);
        console.log("Resultado de eliminar del carrito:", resultadoEliminar);
    } catch (error) {
        console.error(error);
    }
})();