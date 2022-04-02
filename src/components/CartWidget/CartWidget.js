import './CartWidget.css';
import React from 'react';

export const CartWidget = ({
    children
}) => {
    return (
        <div className="cart-widget">
            <i className='fa fa-shopping-cart fa-border fa-3x'>
                <span className='chart'>
                    {children}
                </span>
            </i>
        </div>
    )
}