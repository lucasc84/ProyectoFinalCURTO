//importamos react
import { createContext, useState } from "react";


//creamos el contexto
export const CartContext = createContext();

//creamos el proveedor del contexto (customprovider)
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

//las funciones que van a modificar a cart (setcart)


//agregar item al carrito
    const addItem = (item, quantity) => {
        setCart([...cart, {...item, quantity}])
    }
      
    return (
        <CartContext.Provider value={{cart, addItem}}>
            {children}
            {/*aqui van los estados y funciones que queramos compartir*/}
        </CartContext.Provider>
    )
}