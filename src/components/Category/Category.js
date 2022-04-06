import './Category.css';
import {Button} from '../Button/Button';
import React from 'react';

const Category = () => {
    return(
        <>
            <div className='mainApp-option-category'>
                <p>Categoria</p>
                <Button buttonStyle='btn--primary' buttonSize='btn--medium'>-</Button>
                <Button buttonStyle='btn--primary' buttonSize='btn--medium'>-</Button>
                <Button buttonStyle='btn--primary' buttonSize='btn--medium'>-</Button>
            </div>
            <div className='mainApp-option-id'>
                <p>Buscar id</p>
                <input></input>
            </div>
        </>
    )
}

export default Category;
                    