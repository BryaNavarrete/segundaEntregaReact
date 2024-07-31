import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { IoIosCart } from "react-icons/io";

const CartWidget = () => {

  const { cantidadTotal } = useContext(CartContext)

  let cantidad = cantidadTotal()

    return (
        <Link to="/carrito" className="cartwidget"> 
           <IoIosCart size={35} color="red"/>
           <p>{ cantidad > 0 && cantidad }</p>
        </Link>
    )
}

export default CartWidget