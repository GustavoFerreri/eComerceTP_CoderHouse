import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
    const { cart, clearCart, removeItem } = useContext(CartContext);
    const totalPrice = () =>{
        let acumulated = 0;
        cart.forEach(prod=>acumulated+=prod.quantity*prod.price);
        return acumulated;
    }
    return (
        <div className='content'>
            <div className='contentCart'>
                <h1 className='contentCart-title' >Cart</h1>
                <ul className='contentCart-list'>
                    <li className='contentCart-headerItem'>
                        <span>Producto</span>
                        <span>Cantidad</span>
                        <span>Unidad</span>
                        <span>Subtotal</span>
                        <span>Cancelar</span>
                    </li>
                    {cart.map(prod =>
                        <li className='contentCart-listItem' key={prod.cod}>
                            <span>{prod.name}</span>
                            <span>{prod.quantity}</span>
                            <span>{prod.price}</span>
                            <span>{prod.quantity*prod.price}</span>
                            <span><button className='contentCart-btnDel' onClick={()=>removeItem(prod.cod)}>x</button></span>
                        </li>
                    )}
                </ul>
                <span className='contentPrice'> {cart.length > 0 ? `Total ${totalPrice()}`: 'Sin productos'}</span>
                {cart.length > 0 ? 
                    <button className='contentCart-btnClr' onClick={clearCart}>Vaciar carrito</button> :  
                    <Link to={`/product/all`} className='detailInfo-link'>Volver a la pantalla de productos</Link>}
            </div>
        </div>
    )
}

export default Cart;