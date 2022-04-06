import './ItemListConteiner.css';
import Avatar from '../Avatar/Avatar';
import { ItemList } from './ItemList';
import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom' 

const ItemListConteiner = () => {
    // Se implementa useState y useEffect sin dependencia para resolver la promesa
    const [products, setProducts] = useState([])
    // Aplicamos useParams()
    const { category } = useParams()
    useEffect(() =>{ItemList(category).then(res => {setProducts(res)})}, []);
    return(
        <div className='mainApp'>
            {/* Seguiremos trabajando en la idea tras la entrega */}
            {/* <div className='mainApp-option'>
                <div className='mainApp-option-category'>
                    <p>Categoria</p>
                    <Button buttonStyle='btn-category' buttonSize='btn--medium'>Todos</Button>
                    <Button buttonStyle='btn-category' buttonSize='btn--medium'>Celular</Button>
                    <Button buttonStyle='btn-category' buttonSize='btn--medium'>Notebook</Button>
                    <Button buttonStyle='btn-category' buttonSize='btn--medium'>Tablet</Button>
                </div>
                <div className='mainApp-option-id'>
                    <p>Buscar id</p>
                    <input></input>
                </div>
            </div> */}
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