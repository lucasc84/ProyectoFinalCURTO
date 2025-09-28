//importamos react
import { createContext, useState } from "react";


//creamos el contexto
export const CartContext = createContext();

//creamos el proveedor del contexto (customprovider)
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

//las funciones que van a modificar a cart (setcart)


//funcion 1: agregar item al carrito y contemplar repetidos
    const addItem = (item, qty) => {
        //verificamos si el item ya existe en el cart
        if(isInCart(item.id)){
            console.log("El item ya existe en el carrito")
            //si existe, actualizamos la cantidad
            const carritoActualizado = cart.map((prod) => {
                if(prod.id === item.id){
                //si el id del producto en el carrito es igual al id del item que queremos agregar, actualizamos la cantidad
                return {...prod, quantity: prod.quantity + qty}
                   

         }   else{  
            //si el id del producto en el carrito es diferente al id del item que queremos agregar, lo dejamos igual
            return prod
        }
    })
    setCart(carritoActualizado)
    } else{
        
        //verificamos si el item ya existe en el carrito mediante spread operator
        setCart([...cart, {...item, quantity:qty}])
    }
    }

// funcion 2: borrar todo el cart en cartView y checkout

const clear = () => {
    setCart([])
}

//funcion 3: borrar un item en particular del cart en cartView

const removeItem = (id) => {
    setCart(cart.filter(prod => prod.id !== id))
}

// funcion 4: devolver un booleano si el item ya existe o no en el cart
//esta ultima no la pasamos como value del provider porque no la usamos en ningun lado salvo en addItem
const isInCart = (id) => {
    return cart.some(prod => prod.id === id)
}



    return (
        <CartContext.Provider value={{cart, addItem, clear, removeItem}}>
            {children}
            {/*aqui van los estados y funciones que queramos compartir*/}
        </CartContext.Provider>
    )
}