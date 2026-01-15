
import "./CartWidget.css"

const CartWidget = () => {

    const imgCarrito = "/src/assets/images/carrito-de-compras.png"

  return (
    <div>
        <img className="imgCarrito" src={imgCarrito} alt="Icono carrito de compras" />
    </div>
  )
}

export default CartWidget