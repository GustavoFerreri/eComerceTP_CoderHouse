import './Cart.css';
import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { useNotification } from '../../notification/notification'
import CartContext from '../../context/CartContext';
import { createOrderAndUpdateStock } from '../../services/firebase/firestore'

const Cart = () => {
    const [loading, setLoading] = useState(false)
    const { setNotification } = useNotification()
    const { cart, clearCart, removeItem, getTotalPrice } = useContext(CartContext);

    const createOrder = () => {
        setLoading(true)
        const objOrder = {
            buyer: {
                name: 'Gustavo',
                phone: '1234567890',
                email: 'ferreri@mail.com'
            },
            items: cart,
            total: getTotalPrice()
        }
        createOrderAndUpdateStock(cart, objOrder).then(id => {
            clearCart()
            setNotification('success', `La orden se genero correctamente, su codigo de orden es: ${id}`)
        }).catch((error) => {
            if(error && error.name === 'outOfStockError' && error.products.length > 0) {
                const stringProducts = error.products.map(prod => prod.dataDoc.name).join(', ')
                setNotification('error', `${error.products.length > 1 ? 'Los productos' : 'El producto'} ${stringProducts} no ${error.products.length > 1 ? 'tienen' : 'tiene'} stock`)
            } else {
                console.log(error)
            }
        }).finally(() => {
            setLoading(false)
        })
    }
    if(loading) return <h1>Se esta procesando la orden</h1>
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
                {cart.length > 0 ?
                    <>
                        <span className='contentPrice'> Total {getTotalPrice()}</span>
                        <button className='contentCart-btnClr' onClick={()=>clearCart()}>Vaciar carrito</button>
                        <button className='contentCart-btnClr' onClick={createOrder}>Confirmar compra</button>
                    </>: 
                    <>
                        <span className='contentPrice'> Sin productos</span>
                        <Link to={`/product/all`} className='detailInfo-link'>Volver a la pantalla de productos</Link>
                    </>
                }
            </div>
        </div>
    )
}

export default Cart;