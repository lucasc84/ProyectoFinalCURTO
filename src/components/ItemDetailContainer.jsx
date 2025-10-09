import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { Link, useParams } from "react-router-dom";
import Loader from "./Loader";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({});
  const [loading, setLoading] = useState(false);
  const { invalid, setInvalid } = useState(null);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, "productos", id);
    getDoc(docRef)
      .then((res) => {
        if (res.data()) {
          setDetalle({
            id: res.id,
            ...res.data(),
          });
        } else {
          setInvalid(true);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  if (invalid) {
    <div>
      <h2>El producto que buscas no existe</h2>
      <Link to="/" className="btn btn-primary">
        Volver al inicio
      </Link>
    </div>;
  }

  return (
    <div className="fondo-seccion">
      {loading ? (
        <Loader />
      ) : (
        <>
          <ItemDetail detalle={detalle} />
        </>
      )}
    </div>
  );
};

export default ItemDetailContainer;
