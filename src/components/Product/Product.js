import './Product.css';
import Item from '../Item/Item';
import { ProductCategory } from '../ProductCategory/ProductCategory';
import { ItemList } from '../../asyncMock';
import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
    // capturamos la categoria enviada, y asignamos el valor a products
    const [products, setProducts] = useState([])
    const { category } = useParams()
    useEffect(() =>{ItemList(category).then(res => {setProducts(res)})}, []);
    return(
        <div className='mainApp'>
            <ProductCategory />
            <div className='mainApp-context'>
                {/* Mapeamos ya el producto seteado con el hook */}
                {products.map((element, index) => {
                    return(
                        <div key={index}>
                            {/* Reutilizamos el componente Avatar */}
                            <Item cod={element.cod} name={element.name} price={element.price} stock={element.stock}/> 
                        </div>)
                })}
            </div>
        </div>
    )
}

export default Product;