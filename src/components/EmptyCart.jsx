import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="fondo-seccion">
      <h2 className="text-center">El carrito esta vacio</h2>
      <h3 className="text-center">Chequeá nuestros productos</h3>
      <div className="d-flex justify-content-center">
        <Link className="btn btn-primary" to="/">
          Ver productos
        </Link>
      </div>{" "}
    </div>
  );
};

export default EmptyCart;
