// Función para actualizar el ID de cada clave en la base de datos
const actualizarIDs = (baseDeDatos,valor) => {
    for (const element of baseDeDatos){
        element.id = `${valor}-${element.id}`
    }
    return baseDeDatos
};
export const getAbrigo = async () => {
    try {
        let res = await fetch("http://localhost:5101/abrigo")
        let data = await res.json();
        let newData = actualizarIDs(data,"abrigo");
        return newData;
    } catch (error) {
        console.error(error)
    }
}
export const getCamiseta = async () => {
    try {
        let res = await fetch("http://localhost:5101/camiseta")
        let data = await res.json();
        let newData = actualizarIDs(data,"camiseta");
        return newData;
    } catch (error) {
        console.error(error)
    }
}
export const getPantalon = async () => {
    try {
        let res = await fetch("http://localhost:5101/pantalon")
        let data = await res.json();
        let newData = actualizarIDs(data,"pantalon");
        return newData;
    } catch (error) {
        console.error(error)
    }
}
export const getCarrito = async () => {
    try {
        let res = await fetch("http://localhost:5101/carrito")
        let data = await res.json();
        return data;
    } catch (error) {
        console.error(error)
    }
}