const productos = [
    { id: 1, nombre: "Bordado Azul", precio: 150, img: "" },
    { id: 2, nombre: "Bordado Rosa", precio: 150, img: "" },
    { id: 3, nombre: "Bordado Verde", precio: 150, img: "" },
    { id: 4, nombre: "Bordado Rojo", precio: 150, img: "" },

]

export const getProductos = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos)
        },2000)
    })
}

export const getProductoSeleccionado = (id)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const producto = productos.find(Item =>Item.id === id)
            resolve(producto)
        },2000)
    })
}