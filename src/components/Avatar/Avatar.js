import './Avatar.css';
import ItemCount from '../ItemCount/ItemCount';

const Avatar = ({cod, name, price, stock, ...rest}) => {
    return(
        <picture>
            <img src='https://randomuser.me/api/portraits/lego/5.jpg' alt='lego'></img>
            <div className='avatarInfo'>
                <p>Codigo: <span className='avatarInfo-data'>{cod}</span></p>
                <p>Nombre: <span className='avatarInfo-data'>{name}</span></p>
                <p>Precio: <span className='avatarInfo-data'>{price}</span></p>
            </div>
            {/* Enviamos el stock para manipularlo desde el  */}
            <ItemCount props={stock}/>
        </picture>
    )
}

export default Avatar;