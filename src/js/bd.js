export const getAll=async()=>{
    let res =await fetch("http://localhost:5101")
    let data = await res.json();
    return data
}
export const getAbrigo=async()=>{
    let res =await fetch("http://localhost:5101/abrigo")
    let data = await res.json();
    return data
}
export const getCamiseta=async()=>{
    let res =await fetch("http://localhost:5101/camiseta")
    let data = await res.json();
    return data
}
export const getPantalon=async()=>{
    let res =await fetch("http://localhost:5101/pantalon")
    let data = await res.json();
    return data
}
export const getCarrito=async()=>{
    let res =await fetch("http://localhost:5101/carrito")
    let data = await res.json();
    return data
}