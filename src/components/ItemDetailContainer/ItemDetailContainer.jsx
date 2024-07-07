import { useState, useEffect } from "react"
import { obtenerProductos } from "../../Data/data"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { MoonLoader } from "react-spinners";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null)
  const [loading, setLoading] = useState(true)

  const { idProduct } = useParams()

  useEffect(()=> {
    obtenerProductos()
      .then((data)=> {
        const productoFiltrado = data.find((productoData)=> productoData.id === idProduct )
        setProducto(productoFiltrado)
        setLoading(false)
      })
  }, [idProduct])

  if (loading) {
    return (
      <div 
      style ={ {
       width: "100%", 
       height: "90vh", 
       display: "flex", 
       justifyContent: "center", 
       alignItems: "center",
       } }>
        <MoonLoader color="#ff0000" speedMultiplier={0.8}/></div>
    )
  }

  return (
    <ItemDetail producto={producto} />
  )
}

export default ItemDetailContainer
