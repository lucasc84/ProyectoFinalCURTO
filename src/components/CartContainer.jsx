import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import EmptyCart from "./EmptyCart";
import CartView from "./CartView";
import "../index.css";

const CartContainer = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="fondo-seccion">
      {!cart.length ? <EmptyCart /> : <CartView />}
    </div>
  );
};

export default CartContainer;
