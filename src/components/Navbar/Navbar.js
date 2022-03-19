import React from 'react';
import { NavItem } from './NavItem';
import { Button } from '../Button/Button';
import './Navbar.css';

// Reemplazamos class por arrow function
const Navbar = (props) => {
    return (
        <nav className="navbarItems">
            <h1 className="navbar-logo">Primer App <i className="fab fa-react"></i></h1>
            <ul className='nav-menu'>
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
            <Button Sign>Sign Up</Button>         
        </nav>    
    );
}

export default Navbar;