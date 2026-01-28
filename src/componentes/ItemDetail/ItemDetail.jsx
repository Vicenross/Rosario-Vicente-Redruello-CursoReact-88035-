
const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <>
    <h2>Nombre: {nombre}</h2>
    <h3>Precio: {precio} </h3>
    <img src={img} alt={nombre}/>
    </>
  )
}

export default ItemDetail