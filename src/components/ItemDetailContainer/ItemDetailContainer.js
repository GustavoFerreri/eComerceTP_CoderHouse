import './ItemDetailContainer.css';
import React, { useState, useEffect} from 'react';
import { firestoreDb } from '../../services/firebase';
import { useParams, Link } from 'react-router-dom';
import { getDoc, doc} from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { Cod } = useParams()
    useEffect(()=>{
        setLoading(true)
        const docRef = doc(firestoreDb, 'products', Cod)
        getDoc(docRef).then(querySnapshot =>{
            const product = {}
        })
        SimpleItem(Cod).then(res=>{setProduct(res)})
        setLoading(false)
    },[Cod]);
    if(loading) return <h1>Cargando...</h1>
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
                        <Link to={`/product/all`} className='detailInfo-link'>Volver a la pantalla de productos</Link>
                    </div>
                </picture>
            </div>
        </div>
    );
}

export default ItemDetailContainer;