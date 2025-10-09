import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="fondo-seccion">
      <h1 className="text-center">Eror 404: Página no encontrada 🚫</h1>
      <div className="d-flex justify-content-center">
        <Link className="btn btn-primary" to="/">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default Error;
