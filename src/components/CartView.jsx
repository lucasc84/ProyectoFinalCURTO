import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./css/CartView.css";
import { Card, Row } from "react-bootstrap";

const CartView = () => {
  const { cart, clear, removeItem, total } = useContext(CartContext);

  return (
    <div>
                  <Card bg="info" border="primary" className="mx-auto my-4 w-100" style={{ maxWidth: '900px' }}>
        <Card.Body>
          <Row>

              <Card.Title>Carrito</Card.Title>


      <div>
        {cart.map((compra) => (
          <div key={compra.id} className="cart-item">
            <img src={compra.image} alt={compra.name} className="cart-img" />
            <span>{compra.name}</span>
            <span>${compra.price}</span>
            <span>Cantidad: {compra.quantity}</span>
            <span>Subtotal: ${compra.quantity * compra.price}</span>
            <button
              className="btn btn-danger"
              onClick={() => removeItem(compra.id)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
          </Row>
        </Card.Body>
      </Card>


      <span>Total: ${total()}</span>
      <div className="btn-container">
        <button className="btn btn-danger" onClick={() => clear()}>
          Vaciar carrito
        </button>
        <Link to="/checkout" className="btn btn-success">
          Terminar Compra
        </Link>
      </div>
    </div>
  );
};

export default CartView;
