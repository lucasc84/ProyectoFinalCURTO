import { PiShoppingCartSimpleFill } from "react-icons/pi";
import Badge from "react-bootstrap/Badge";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const CartWidget = () => {
  console.log("CartWidget Renderizado");
  const { cart, cartQuantity } = useContext(CartContext);

  return (
    <div className="cart-widget" aria-label="Carrito de compras ">
      <PiShoppingCartSimpleFill fontSize={"2rem"} />
      {cart.length > 0 && <Badge bg="info">{cartQuantity()}</Badge>}
    </div>
  );
};

export default CartWidget;
