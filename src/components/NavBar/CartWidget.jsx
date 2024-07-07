import { IoIosCart } from "react-icons/io";

const CartWidget = () => {
    return (
        <div>
           <IoIosCart size={35} color="red"/>
           <p className="colorNumero">1</p>
        </div>
    )
}

export default CartWidget