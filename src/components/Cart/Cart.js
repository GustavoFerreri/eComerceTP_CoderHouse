import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { addDoc, collection, getFirestore, updateDoc, doc} from 'firebase/firestore';
import { firestoreDb } from '../../services/firebase';
import CartContext from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
    const { cart, clearCart, removeItem, getTotalPrice } = useContext(CartContext);
    const createOrder = () =>{
        const objOrder = {
            buyer: {
                name: 'Gustavo',
                phone: '1234567890',
                email: 'ferreri@mail.com'
            },
            tems: cart,
            total: getTotalPrice()
        }
        const collectionRef = collection(firestoreDb, 'orders')
        addDoc(collectionRef, objOrder).then(res =>{
            console.log(res)
        })
    }
    const updateOrder = () => {
        const docRef = doc(firestoreDb, 'orders', id);
        updateDoc(docRef, { total: 9999 })
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
                {cart.length > 0 ?
                    <>
                        <span className='contentPrice'> Total {getTotalPrice()}</span>
                        <button className='contentCart-btnClr' onClick={()=>clearCart()}>Vaciar carrito</button>
                        <button className='contentCart-btnClr' onClick={()=>createOrder()}>Confirmar compra</button>
                        <button className='contentCart-btnClr' onClick={()=>updateOrder()}>Actualizar orden</button>
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