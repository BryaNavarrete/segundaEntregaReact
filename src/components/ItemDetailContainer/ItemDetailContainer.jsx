import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import db from "../../db/db.js";
import { doc, getDoc } from "firebase/firestore";
import { MoonLoader } from "react-spinners";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null); 

  const { idProduct } = useParams();

  const obtenerProducto = () => {
    const docRef = doc(db, "productos", idProduct);
    getDoc(docRef)
      .then((respuesta) => {
        if (respuesta.exists()) {
          const data = { id: respuesta.id, ...respuesta.data() };
          setProducto(data);
          setError(null);
        } else {
          setError("Producto no encontrado."); 
        }
        setCargando(false); 
      })
      .catch(() => {
        setError("Error al obtener el producto."); 
        setCargando(false); 
      });
  };

  useEffect(() => {
    setCargando(true); 
    obtenerProducto();
  }, [idProduct]);

  return (
    <div className="itemdetailcontainer">
      {cargando ? (
        <div
          style={{
            width: "100%",
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MoonLoader color="#ff0000" speedMultiplier={0.8} />
        </div>
      ) : error ? (
        <div className="error-message">
          <h2>{error}</h2> {/* Muestra el mensaje de error */}
        </div>
      ) : (
        <ItemDetail producto={producto} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
