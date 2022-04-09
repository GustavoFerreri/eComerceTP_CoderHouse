import React from "react";

export const ProductCategory = () => {
    return (
        <div className='mainApp-option'>
            <div className='mainApp-option-category'>
                <p>Categoria</p>
                <a href='/product/all' className='btn-category'>Todos</a>
                <a href='/product/phone' className='btn-category'>Celulares</a>
                <a href='/product/notebook' className='btn-category'>Notebooks</a>
                <a href='/product/tablet' className='btn-category'>Tablet</a>
            </div>
            <div className='mainApp-option-id'>
                <p>Buscar id</p>
                <input></input>
            </div>
        </div>
    )
}
