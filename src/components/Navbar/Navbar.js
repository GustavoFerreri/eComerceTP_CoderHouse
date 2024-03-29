import React, { useContext } from "react";
import { useState } from 'react';
import { NavItem } from './NavItem';
import { CartWidget } from '../CartWidget/CartWidget';
import CartContext from '../../context/CartContext';
import './Navbar.css';

// Reemplazamos class por arrow function
const Navbar = (props) => {
    // Readaptamos el codigo con hooks
    const [state, setState] = useState(false);
    const { getQuantity } = useContext(CartContext)
    const handleClick = () => {
        setState(!state);
    }
    return (
        <nav className="navbarItems">
            <h1 className="navbar-logo">Primer App <i className="fab fa-react"></i></h1>
            <div className="menu-icon" onClick={handleClick}>
                <i className={state ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={state ? 'nav-menu active': 'nav-menu'}>
                {NavItem.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.link}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
            {getQuantity() === 0 ? '': <CartWidget>{getQuantity()}</CartWidget>}
        </nav>    
    );
}

export default Navbar;