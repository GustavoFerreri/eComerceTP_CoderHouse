import React, { Component } from 'react';
import { NavItem } from './NavItem';
import { Button } from '../Button/Button';
import './Navbar.css';

class Navbar extends Component {
    state = {clicked: false};

    handleClick = () => {
        this.setState({clicked: !this.state.clicked});
    }

    render() {
        return (
            <nav className="navbarItems">
                <h1 className="navbar-logo">Primer App <i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
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
}

export default Navbar;