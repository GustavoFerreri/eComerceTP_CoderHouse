import './Avatar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
// import {useState} from 'react';

const Avatar = ({cod, name, price, stock, addToCart, ...rest}) => {
    return(
        <picture>
            <img src='https://randomuser.me/api/portraits/lego/5.jpg' alt='lego'></img>
            <div className='avatarInfo'>
                <p>Codigo: <span className='avatarInfo-data'>{cod}</span></p>
                <p>Nombre: <span className='avatarInfo-data'>{name}</span></p>
                <p>Precio: <span className='avatarInfo-data'>{price}</span></p>
                <Link to={`/detail/${cod}`} className='avatarInfo-link'>Detalle</Link>
            </div>
            {/* Enviamos el stock para manipularlo desde el  */}
            <ItemCount props={stock} addToCart={addToCart}/>
        </picture>
    )
}

export default Avatar;