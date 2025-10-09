import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/firebase";
import "../components/css/ItemListContainer.css";

const ItemListContainer = ({ mensaje }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { type } = useParams();
  console.log("categoria", type);

  useEffect(() => {
    setLoading(true);
    const prodCollection = type
      ? query(collection(db, "productos"), where("category", "==", type))
      : collection(db, "productos");
    getDocs(prodCollection)
      .then((res) => {
        console.log(res.docs, "docs");
        const list = res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setData(list);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [type]);

  console.log(data);

  return (
    <div className="fondo-seccion">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1 className="mensaje-bienvenida">
            {mensaje}{" "}
            {type && (
              <span style={{ textTransform: "capitalize" }}>{type}</span>
            )}
          </h1>
          <ItemList data={data} />
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
