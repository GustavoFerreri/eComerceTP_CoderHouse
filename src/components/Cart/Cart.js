import React, { useContext } from "react";
import CartContext from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
    const { cart, clearCart, removeItem } = useContext(CartContext);
    return (
        <div className='contentCart'>
            <h1 className='contentCart-title' >Cart</h1>
            <ul className='contentCart-list'>
                {cart.map(prod =>
                    <li className='contentCart-listItem' key={prod.cod}>
                        <span>{prod.name}</span>
                        <span>{prod.quantity}</span>
                        <span><button className='contentCart-btnDel' onClick={()=>removeItem(prod.cod)}>x</button></span>
                    </li>
                )}
            </ul>
            <button className='contentCart-btnClr' onClick={clearCart}>Vaciar carrito</button>
        </div>
    )
}

export default Cart;