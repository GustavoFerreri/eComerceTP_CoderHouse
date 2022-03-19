import React from 'react';
import { useState } from 'react';
import { NavItem } from './NavItem';
import { Button } from '../Button/Button';
import { CartWidget } from '../CartWidget/CartWidget';
import './Navbar.css';

// Reemplazamos class por arrow function
const Navbar = (props) => {
    // Readaptamos el codigo con hooks
    const [state, setState] = useState(false);
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
            <Button>Sign Up</Button>
            <CartWidget>1</CartWidget>
        </nav>    
    );
}

export default Navbar;