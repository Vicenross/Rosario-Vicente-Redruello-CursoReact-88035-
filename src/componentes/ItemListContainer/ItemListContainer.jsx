import { useState, useEffect } from "react"
import { getProductos } from "../../asyncmock"




const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  useEffect(() => {
    getProductos()
      .then(respuesta => setProductos(respuesta))
      .catch(error => console.log(error))
  }, [])

  return (
    <>

    </>

  )
}

export default ItemListContainer

