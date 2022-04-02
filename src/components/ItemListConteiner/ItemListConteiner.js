import './ItemListConteiner.css';
import React from 'react';
import Avatar from '../Avatar/Avatar';
import { useState, useEffect} from 'react';
import { ItemList } from './ItemList';

const ItemListConteiner = () => {
    // Se implementa useState y useEffect sin dependencia para resolver la promesa
    const [products, setProducts] = useState([])
    useEffect(() =>{ItemList().then(res => {setProducts(res)})}, []);
    return(
        <div className='mainApp'>
            {/* Mapeamos ya el producto seteado con el hook */}
            {products.map((item, index) => {
                return(
                    <div key={index}>
                        {/* Reutilizamos el componente Avatar */}
                        <Avatar cod={item.cod} name={item.name} price={item.price} stock={item.stock}/> 
                    </div>)
            })}
        </div>
    )
}

export default ItemListConteiner;