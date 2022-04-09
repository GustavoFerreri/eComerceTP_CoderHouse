import React, { useContext } from "react";
import CartContext from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
    const { cart, clearCart } = useContext(CartContext)
    return (
        <div className='contentCart'>
            <h1 className='contentCart-title' >Cart</h1>
            <ul className='contentCart-list'>
                {cart.map(prod => <li className='contentCart-listItem' key={prod.cod}><span>{prod.name}</span><span>{prod.quantity}</span></li>)}
            </ul>
            <button onClick={clearCart}>Vaciar carrito</button>
        </div>
    )
}

export default Cart