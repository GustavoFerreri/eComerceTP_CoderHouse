import './Navbar.css'
import NavItem from '../NavItem/NavItem'

const Navbar = () =>{
    return (
        <nav>
            <h1>E-Comerce</h1>
            <div>
                <NavItem name='home'/>
                <NavItem name='Catalogo'/>
                <NavItem name='Carrito'/>
            </div>
        </nav>
    )
}

export default Navbar;