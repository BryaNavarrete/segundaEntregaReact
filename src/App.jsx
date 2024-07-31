import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";

import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Error from './components/Ejemplos/Error';

import { CartProvider } from "./Context/CartContext";
import Carrito from "./components/Carrito/Carrito";
import Checkout from "./components/Checkout/Checkout";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  
  return (
    <BrowserRouter>
      <CartProvider>
      <NavBar />
      <ToastContainer theme="dark" />

      <Routes>
         <Route path= '/' element = { <ItemListContainer /> } />
         <Route path= "/category/:idCategory" element = { <ItemListContainer /> } />
         <Route path= "/detail/:idProduct" element = { <ItemDetailContainer /> } />
         <Route path= "/carrito" element={<Carrito />} />
         <Route path= "/checkout" element={<Checkout />} />

         <Route path="*" element={<Error />} />
      </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App