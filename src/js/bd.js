export const getAbrigo = async () => {
    try {
        let res = await fetch("http://localhost:5101/abrigo")
        let data = await res.json();
        return data;
    } catch (error) {
        console.error(error)
    }
}
export const getCamiseta = async () => {
    try {
        let res = await fetch("http://localhost:5101/camiseta")
        let data = await res.json();
        return data;
    } catch (error) {
        console.error(error)
    }
}
export const getPantalon = async () => {
    try {
        let res = await fetch("http://localhost:5101/pantalon")
        let data = await res.json();
        return data;
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