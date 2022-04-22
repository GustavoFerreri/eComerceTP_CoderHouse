import React, { createContext, useState } from "react";
import { useNotification } from '../notification/notification';

const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const { setNotification } = useNotification();
    const addItem = (product, quantity) => {
        const objItemCart = {
            ...product,
            quantity
        }
        setCart([...cart, objItemCart ])
        setNotification('success', `Se agregaron correctamente los productos ${product.cod}`)
    }

    const clearCart = () => {
        setCart([])
        setNotification('success', 'Se ha vaciado el Carrito')
    }

    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => { count = count + prod.quantity })
        return count
    }

    const getTotalPrice = () =>{
        let acumulated = 0;
        cart.forEach(prod=>{ acumulated += prod.quantity * prod.price });
        return acumulated;
    }

    const removeItem = (cod) => {
        setCart(cart.filter(product=>product.cod !== cod))
        setNotification('error', 'Se elimino un producto')
    }

    return (
        <Context.Provider value={{ cart, addItem, clearCart, getQuantity, removeItem, getTotalPrice}}>
            {children}
        </Context.Provider>
    )
}

export default Context