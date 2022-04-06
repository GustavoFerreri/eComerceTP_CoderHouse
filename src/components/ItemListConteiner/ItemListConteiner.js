import './ItemListConteiner.css';
import Avatar from '../Avatar/Avatar';
import { ItemList } from './ItemList';
import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const ItemListConteiner = () => {
    // Se implementa useState y useEffect sin dependencia para resolver la promesa
    const [products, setProducts] = useState([])
    const { category } = useParams()
    useEffect(() =>{ItemList(category).then(res => {setProducts(res)})}, []);
    return(
        <div className='mainApp'>
            <div className='mainApp-context'>
                {/* Mapeamos ya el producto seteado con el hook */}
                {products.map((item, index) => {
                    return(
                        <div key={index}>
                            {/* Reutilizamos el componente Avatar */}
                            <Avatar cod={item.cod} name={item.name} price={item.price} stock={item.stock}/> 
                        </div>)
                })}
            </div>
        </div>
    )
}

export default ItemListConteiner;