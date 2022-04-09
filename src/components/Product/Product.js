import './Product.css';
import Avatar from '../Avatar/Avatar';
import { ProductCategory } from '../ProductCategory/ProductCategory';
import { ItemList } from '../../asyncMock';
import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Product = ({addToCart}) => {

    const [products, setProducts] = useState([])
    const { category } = useParams()
    useEffect(() =>{ItemList(category).then(res => {setProducts(res)})}, []);
    return(
        <div className='mainApp'>
            <ProductCategory />
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

export default Product;