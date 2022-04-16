import React from 'react';
import { createContext, useState } from "react";

const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const addItem = (product, quantity) => {
        const objItemCart = {
            ...product,
            quantity
        }
        setCart([...cart, objItemCart ])
    }

    const clearCart = () => {
        setCart([])
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

    const removeItem = (cod) => setCart(cart.filter(product=>product.cod !== cod))

    return (
        <Context.Provider value={{ cart, addItem, clearCart, getQuantity, removeItem, getTotalPrice}}>
            {children}
        </Context.Provider>
    )
}

export default Context