import './ItemListConteiner.css';
import Avatar from '../Avatar/Avatar';
import { ItemList } from './ItemList';
import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const ItemListConteiner = ({addToCart}) => {
    // Se implementa useState y useEffect sin dependencia para resolver la promesa
    const [products, setProducts] = useState([])
    // Aplicamos useParams()
    const { category } = useParams()
    useEffect(() =>{ItemList(category).then(res => {setProducts(res)})}, []);
    return(
        <div className='mainApp'>
            {/* Seguiremos trabajando en la idea tras la entrega */}
            <div className='mainApp-option'>
                <div className='mainApp-option-category'>
                    <p>Categoria</p>
                    <a href='/all' className='btn-category'>Todos</a>
                    <a href='/product/phone' className='btn-category'>Celulares</a>
                    <a href='/product/notebook' className='btn-category'>Notebooks</a>
                    <a href='/product/tablet' className='btn-category'>Tablet</a>
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
                            <Avatar cod={item.cod} name={item.name} price={item.price} stock={item.stock} addToCart={addToCart}/> 
                        </div>)
                })}
            </div>
        </div>
    )
}

export default ItemListConteiner;