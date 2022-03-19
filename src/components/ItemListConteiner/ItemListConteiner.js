import './ItemListConteiner.css';
import { ItemList } from './ItemList';
import Avatar from '../Avatar/Avatar';

const ItemListConteiner = () => {
    return(
        <div className='mainApp'>
            {ItemList.map((item, index) => {
                return(<Avatar key={index} name={item.name} age={item.age}/> )
            })}
        </div>
    )
}

export default ItemListConteiner;