import ItemCount from "./ItemCount";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const ItemDetail = ({ detalle }) => {
  const { addItem } = useContext(CartContext);

  const [purchase, setPurchase] = useState(false);

  const onAdd = (cantidad) => {
    // console.log(
    //   `Se agregaron ${cantidad} unidades de ${detalle?.name} al carrito`
    // );
    setPurchase(true);
    addItem(detalle, cantidad);
    Swal.fire({
      position: "top-end",
      icon: "success",
      iconColor: "#0d6efd",
      title: `Se agregaron ${cantidad} unidades de ${detalle?.name} al carrito`,
      showConfirmButton: false,
      showCancelButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="fondo-seccion">
      <Card
        bg="info"
        border="primary"
        className="mx-auto my-4 w-100"
        style={{ maxWidth: "900px" }}
      >
        <Card.Body>
          <Row>
            <Col
              xs={12}
              md={6}
              className="d-flex align-items-center justify-content-center"
            >
              <Card.Img
                variant="top"
                src={detalle?.image}
                alt={detalle?.name}
                style={{ maxHeight: "300px", width: "auto" }}
              />
            </Col>
            <Col xs={12} md={6}>
              <Card.Title>{detalle?.name}</Card.Title>
              <Card.Text>
                <span>{detalle?.description}</span>
                <br />
                <span>Precio: ${detalle?.price}</span>
                <br />
                <span>Stock disponible: {detalle?.stock}</span>
              </Card.Text>
              {purchase ? (
                <Link className="btn btn-dark" to="/cart">
                  Terminar mi compra
                </Link>
              ) : (
                <ItemCount stock={detalle?.stock} initial={1} onAdd={onAdd} />
              )}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;
