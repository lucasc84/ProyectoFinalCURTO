import { serverTimestamp } from "firebase/firestore";
import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../services/firebase";
import EmptyCart from "./EmptyCart";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { useForm } from "react-hook-form";
import "./css/Checkout.css";
import "../index.css";

const Checkout = () => {
  const [orderId, setOrderId] = useState(null);
  const { cart, total, clear } = useContext(CartContext);
  const {register, handleSubmit, formState:{errors}, getValues}= useForm()

   console.log(errors, 'errores')

  const finalizarCompra = (dataForm) => {
    console.log(dataForm, 'register');


      let order = {
        comprador: {
          name: dataForm.name,
          lastname: dataForm.lastname,
          address: dataForm.address,
          email: dataForm.email,
         } ,
        compras: cart,
        total: total(),
        fecha: serverTimestamp(),
      };

    const ventas = collection(db, "orders");
      addDoc(ventas, order)
      .then((res) => {
        setOrderId(res.id);
        clear();
      })
      .catch((err) => console.log(err));
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

                <form onSubmit={handleSubmit(finalizarCompra)}>
                  <input
                    name="name"
                    className="form-control"
                    placeholder="Ingrese su nombre"
                    type="text"
                    {...register("name", { required: true, minLength: 3, maxLength: 20 })}
                  />
            {errors?.name?.type === "required" && <span  style={{color:'red'}}>Por favor complete el campo.</span>}
            {errors?.name?.type === "minLength" && <span  style={{color:'red'}}>El nombre debe contener mínimo 3 caracteres.</span>}
            {errors?.name?.type === "maxLength" && <span  style={{color:'red'}}>El nombre debe contener máximo 20 caracteres.</span>}

                  <input
                    name="lastname"
                    className="form-control"
                    placeholder="Ingrese su apellido"
                    type="text"
                    {...register("lastname", { required: true, minLength: 3, maxLength: 20 })}

                  />
             {errors?.lastname?.type === "required" && <span  style={{color:'red'}}>Por favor complete el campo.</span>}
            {errors?.lastname?.type === "minLength" && <span  style={{color:'red'}}>El apellido debe contener mínimo 2 caracteres.</span>}
            {errors?.lastname?.type === "maxLength" && <span  style={{color:'red'}}>El apellido debe contener máximo 20 caracteres.</span>}

                  <input
                    name="address"
                    className="form-control"
                    placeholder="Ingrese su dirección de envio"
                    type="text"
                    {...register("address", {required:true, minLength:10, maxLength:25})}                    
                  />
                  {errors?.address?.type === "required" && <span  style={{color:'red'}}>Por favor complete el campo.</span>}
                  {errors?.address?.type === "minLength" && <span  style={{color:'red'}}>La dirección debe contener mínimo 10 caracteres.</span>}
                  {errors?.address?.type === "maxLength" && <span  style={{color:'red'}}>La      dirección es demasiado larga.</span>}
                  <input
                    name="email"
                    className="form-control"
                    placeholder="Ingrese su correo"
                    type="email"
                    {...register("email", {required:true})}
                  />
                  {errors?.email?.type === "required" && <span  style={{color:'red'}}>Por favor complete el campo.</span>}


                  <input
                    name="second-email"
                    className="form-control"
                    placeholder="Repita su correo"
                    type="email"
                    {...register("secondemail", {required:true, validate:{equalsMails: mail2 => mail2 === getValues().email}})}                  />
                    {errors?.secondemail?.type === "required" && <span  style={{color:'red'}}>Por favor complete el campo.</span>}
                    {errors?.secondemail?.type === "equalsMails" && <span  style={{color:'red'}}>Los mails deben ser iguales.</span>}
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
