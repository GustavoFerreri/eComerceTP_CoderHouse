import './ItemDetailContainer.css';
import React, { useState, useEffect} from 'react';
import { SimpleItem } from '../ItemListConteiner/ItemList';
import { useParams, Link } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const { Cod } = useParams()
    useEffect(()=>{
        SimpleItem(Cod)
        .then(res=>{
            setProduct(res)
        })},[Cod]);
    return(
        <div className='detailInfo'>
            <h1>Detalle</h1>
            <div className='detailInfo-content'>
                <picture className='detailInfo-picture'>
                    <img src='https://randomuser.me/api/portraits/lego/5.jpg' alt='lego'></img>
                    <div className='detailInfo-option'>
                        <p>Codigo: <span className='detailInfo-data'>{product.cod}</span></p>
                        <p>Nombre: <span className='detailInfo-data'>{product.name}</span></p>
                        <p>Precio: <span className='detailInfo-data'>{product.price}</span></p>
                        <Link to={`/product`} className='detailInfo-link'>Volver a la pantalla de productos</Link>
                    </div>
                </picture>
            </div>

        </div>
    );
}

export default ItemDetailContainer;