// Agrega un elemento al carrito
export const agregarAlCarrito = async (itemArray) => {
    const response = await fetch('http://172.16.101.146:5499/carrito', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(itemArray)
    });
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
