import './ItemListConteiner.css';
import { ItemList } from './ItemList';
import Avatar from '../Avatar/Avatar';

const ItemListConteiner = () => {
    return(
        <div className='mainApp'>
            {ItemList.map((item, index) => {
                return(
                    <div key={index}>
                        {/* Reutilizamos el componente Avatar */}
                        <Avatar cod={item.cod} name={item.name} price={item.price} stock={item.stock}/> 
                    </div>)
            })}
        </div>
    )
}

export default ItemListConteiner;