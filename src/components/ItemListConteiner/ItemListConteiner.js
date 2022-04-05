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
            <div className='mainApp-option'>
                <div className='mainApp-option-category'>
                    <p>Categoria</p>
                    <select>
                        <option>Todos</option>
                        <option>Celulares</option>
                        <option>Notebook</option>
                        <option>Tablet</option>
                    </select>
                </div>
                <div className='mainApp-option-id'>
                    <p>Buscar id</p>
                    <input></input>
                </div>
            </div>
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