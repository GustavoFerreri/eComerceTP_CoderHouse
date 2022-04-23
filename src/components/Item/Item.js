// Item reemplaza Avatar
import './Item.css';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import React, {useState, useContext} from 'react';
import CartContext from '../../context/CartContext';

const Item = ({cod, name, price, stock, ...rest}) => {
    const [quantity, setQuantity] = useState(0);
    const { addItem } = useContext(CartContext);
    const handleOnAdd = (count) => {
        setQuantity(count);
        addItem({cod, name, price}, count);
    }
    return(
        <article className='item'>
            <picture>
                <img src='https://randomuser.me/api/portraits/lego/5.jpg' alt='lego'></img>
            </picture>
            <div className='itemInfo'>
                {/* <p>Codigo: <span className='itemInfo-data'>{cod}</span></p> */}
                <p>Nombre: <span className='itemInfo-data'>{name}</span></p>
                <p>Precio: <span className='itemInfo-data'>{price}</span></p>
                <Link to={`/detail/${cod}`} className='itemInfo-link'>Detalle</Link>
            </div>
            <footer className='ItemFooter'>
                {quantity === 0 ? <ItemCount props={stock} onAdd={handleOnAdd}/> : <Link to={'/cart'} className='itemInfo-link'>Ir al carrito</Link>}
            </footer>
        </article>
    )
}

export default Item;