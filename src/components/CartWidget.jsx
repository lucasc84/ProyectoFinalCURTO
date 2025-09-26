import { PiShoppingCartSimpleFill } from "react-icons/pi";
import Badge from 'react-bootstrap/Badge';
//importo el hook que me permite consumir el contexto
import { useContext } from "react";
//importo el contexto
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
    const {cart} = useContext(CartContext);
    console.log(cart)
    return (
        <div className="cart-widget" aria-label="Carrito de compras ">
            <PiShoppingCartSimpleFill fontSize={"2rem"}/>
                  <Badge bg="info">3</Badge>
        </div>
    );
}

export default CartWidget