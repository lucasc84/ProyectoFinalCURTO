//importamos react
import {createContext} from "react";


//creamos el contexto
export const CartContext = createContext();

//creamos el proveedor del contexto (customprovider)
export const CartProvider = ({children}) => {
    const {cart, setCart} = useState([]);

//las funciones que van a modificar a cart
    return (
        <CartContext.Provider value={{cart}}>
            {children}
            {/*aqui van los estados y funciones que queramos compartir*/}
        </CartContext.Provider>
    )
}