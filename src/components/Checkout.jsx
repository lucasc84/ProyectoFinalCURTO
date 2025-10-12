import { serverTimestamp } from "firebase/firestore";
import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../services/firebase";
import EmptyCart from "./EmptyCart";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import "./css/Checkout.css";
import "../index.css";

const Checkout = () => {
  const [orderId, setOrderId] = useState(null);
  const { cart, total, clear } = useContext(CartContext);

  const finalizarCompra = (e) => {


      let order = {
        comprador: {
         } ,
        compras: cart,
        total: total(),
        fecha: serverTimestamp(),
      };
 
    }
  };

  if (!cart.length && !orderId) {
    return <EmptyCart />;
  }

  return (
    <div className="fondo-seccion">
      {orderId ? (
        <h2 className="text-center">
          Gracias por su compra! Su número de orden es: {orderId}
        </h2>
      ) : (
        <div>
          <Card
            bg="info"
            border="primary"
            className="mx-auto my-4 w-100"
            style={{ maxWidth: "900px" }}
          >
            <Card.Body>
              <Row>
                <Card.Title>Complete el formulario con sus datos</Card.Title>

                <form onSubmit={finalizarCompra}>
                  <input
                    name="name"
                    className="form-control"
                    placeholder="Ingrese su nombre"
                    type="text"
                  />

                  <input
                    name="lastname"
                    className="form-control"
                    placeholder="Ingrese su apellido"
                    type="text"
                  />

                  <input
                    name="address"
                    className="form-control"
                    placeholder="Ingrese su dirección de envio"
                    type="text"
                  />

                  <input
                    name="email"
                    className="form-control"
                    placeholder="Ingrese su correo"
                    type="email"
                  />

                  <input
                    name="second-email"
                    className="form-control"
                    placeholder="Repita su correo"
                    type="email"
                    onChange={(e) => setCheckMail(e.target.value)}
                  />
                  <button className="btn btn-primary" type="submit">
                    Completar Compra
                  </button>
                </form>
              </Row>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Checkout;
