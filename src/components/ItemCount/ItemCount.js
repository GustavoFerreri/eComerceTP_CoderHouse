import './ItemCount.css';
import React from 'react';
import {useState} from 'react';

const ItemCount = ({props, addToCart}) =>{
    const [count, setCount] = useState(0);
    const increment = () =>{
        if (count < props){
            setCount(count + 1);
        }
    }
    const decrement = () =>{
        if (count > 0){
            setCount(count - 1);
        }
    }
    return(
        <div>
            <div className='item-count'>
                <button onClick={decrement}>-</button>
                <span className='item-count__count'>{count}</span>
                <button onClick={increment}>+</button>
            </div>
            <div className='item-add'>
                <button onClick={addToCart(count)}>Add Cart</button>
            </div>
        </div>
    )
}

export default ItemCount;