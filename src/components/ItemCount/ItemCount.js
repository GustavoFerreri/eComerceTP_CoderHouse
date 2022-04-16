import React, { useState } from 'react';
import { Button } from '../Button/Button';

const ItemCount = ({props, onAdd}) =>{
    const [count, setCount] = useState(0);
    const increment = () =>{ if (count < props){ setCount(count + 1); }}
    const decrement = () =>{ if (count > 0){ setCount(count - 1); }}
    return(
        <div>
            <div className='item-count'>
                <Button buttonStyle='btn--primary' buttonSize='btn--medium' onClick={decrement}>-</Button>
                <span className='item-count__count'>{count}</span>
                <Button buttonStyle='btn--primary' buttonSize='btn--medium' onClick={increment}>+</Button>
            </div>
            <div className='item-add'>
                <Button buttonStyle='btn--primary' buttonSize='btn--medium' disableBtn={count===0?true:false} onClick={() => onAdd(count)}>Agregar al carrito</Button>
            </div>
        </div>
    )
}

export default ItemCount;