import './Product.css';
import Item from '../Item/Item';
import { ProductCategory } from '../ProductCategory/ProductCategory';
import { firestoreDb } from '../../services/firebase';
import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where} from 'firebase/firestore';

const Product = () => {
    // capturamos la categoria enviada, y asignamos el valor a products
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { category } = useParams()
    useEffect(() =>{
        setLoading(true)
        const collectionRef = category!== 'all'
            ? query(collection(firestoreDb, 'products'), where('category', '==', category))
            : collection(firestoreDb, 'products')
        getDocs(collectionRef).then(querySnapshot => {
            const products = querySnapshot.docs.map(doc =>{return {id: doc.id, ...doc.data()}})
            setProducts(products);
        }).catch(error=>console.log(error))
        .finally(()=>setLoading(false))
    }, [])
    if(loading) return <h1>Cargando...</h1>
    return(
        <div className='mainApp'>
            <ProductCategory />
            <div className='mainApp-context'>
                {/* Mapeamos ya el producto seteado con el hook */}
                {products.map((element, index) => {
                    return(
                        <div key={index}>
                            {/* Reutilizamos el componente Avatar */}
                            <Item cod={element.id} name={element.name} price={element.price} stock={element.stock}/> 
                        </div>)
                })}
            </div>
        </div>
    )
}

export default Product;