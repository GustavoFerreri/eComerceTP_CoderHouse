import './Avatar.css';
// import Button from '../Button/Button';

// Se Agrega el parametro key para no repetir el componente
const Avatar = ({key, name, age, ...rest}) => {
    return(
        <picture key={key}>
            <img src='https://randomuser.me/api/portraits/lego/5.jpg' alt='lego'></img>
            <p>Nombre: {name}</p>
            <p>Edad: {age}</p>
            {/* <Button /> */}
        </picture>
    )
}

export default Avatar;