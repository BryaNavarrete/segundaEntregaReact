import { obtenerProductos } from "../../Data/data";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import "./ItemListContainer.css"


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(false)

  const { idCategory } = useParams()

  useEffect(() => {
    setCargando(true)

    obtenerProductos()
      .then((respuesta) => {
        if(idCategory){
          const productosFiltrados = respuesta.filter( (producto) => producto.categoria === idCategory )
          setProductos(productosFiltrados)
        }else{
          setProductos(respuesta);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setCargando(false)
      });
  }, [idCategory]);
  return (
    <div className="itemlistcontainer">
       {cargando ? 
       <div 
       style ={ {
        width: "100%", 
        height: "90vh", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        } }>
        <MoonLoader color="#ff0000" speedMultiplier={0.8}/></div> : <ItemList productos = {productos} />}
    </div>
  );
};
export default ItemListContainer;