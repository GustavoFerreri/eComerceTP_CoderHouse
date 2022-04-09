import './Item.css';
import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
// import {useState} from 'react';

const Avatar = ({cod, name, price, stock, addToCart, ...rest}) => {
    return(
        <picture>
            <img src='https://randomuser.me/api/portraits/lego/5.jpg' alt='lego'></img>
            <div className='itemInfo'>
                <p>Codigo: <span className='itemInfo-data'>{cod}</span></p>
                <p>Nombre: <span className='itemInfo-data'>{name}</span></p>
                <p>Precio: <span className='itemInfo-data'>{price}</span></p>
                <Link to={`/detail/${cod}`} className='itemInfo-link'>Detalle</Link>
            </div>
            {/* Enviamos el stock para manipularlo desde el  */}
            <ItemCount props={stock} addToCart={addToCart}/>
        </picture>
    )
}

export default Avatar;