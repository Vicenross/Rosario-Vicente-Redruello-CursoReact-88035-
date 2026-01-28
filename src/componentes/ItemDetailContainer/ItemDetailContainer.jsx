import { useEffect, useState } from "react"
import { getProductoBuscado } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
  
    const [producto, setProducto] = useState(null)

    useEffect(()=>{
        getProductoBuscado(2)
        .then(respuesta => setProducto(respuesta))
    },[])
  
    return (
    <div>
        <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer