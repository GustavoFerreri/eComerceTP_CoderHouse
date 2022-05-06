import React, { useContext, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { getCategories } from '../../services/firebase/firestore' 

export const ProductCategory = () => {
    const [category, setCategory] = useState();

    return (
        <div className='mainApp-option'>
            <div className='mainApp-option-category'>
                <p>Categoria</p>
                <a href='/product/all' className='btn-category'>Todos</a>
                {
                    categories.map(cat => 
                        <NavLink 
                            key={cat.id} 
                            to={`/product/${cat.id}`} 
                            className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}
                        >
                            {cat.description}
                        </NavLink>)
                }
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
