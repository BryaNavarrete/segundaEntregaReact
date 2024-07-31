import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import "./ItemListContainer.css";
import db from "../../db/db.js";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const { idCategory } = useParams();

  const obtenerProductos = () => {
    const productosRef = collection(db, "productos");
    getDocs(productosRef).then((respuesta) => {
      const data = respuesta.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });

      setProductos(data);
      setCargando(false); 
    });
  };

  const obtenerProductosFiltrados = () => {
    const productosRef = collection(db, "productos");
    const q = query(productosRef, where("categoria", "==", idCategory));
    getDocs(q).then((respuesta) => {
      const data = respuesta.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });

      setProductos(data);
      setCargando(false); 
    });
  };

  useEffect(() => {
    setCargando(true); 
    if (idCategory) {
      obtenerProductosFiltrados();
    } else {
      obtenerProductos();
    }
  }, [idCategory]);

  return (
    <div className="itemlistcontainer">
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
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
};

export default ItemListContainer;
