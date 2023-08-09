import { Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ItemCount({ add, increment, decrement, count, isInCart }) {

    return (
        <div>
            <ButtonGroup className='w-100' aria-label="Basic example">
                <Button onClick={decrement} variant="secondary">-</Button>
                <Button variant="secondary" disabled>{count}</Button>
                <Button onClick={increment} variant="secondary">+</Button>
            </ButtonGroup>
            {
                isInCart ?
                    <div>
                        <Button onClick={add} className='w-100 mt-2'>Actualizar</Button>
                        <Button as={Link} to='/cart' variant='success' className='w-100 mt-2'>Ir al Carrito</Button>
                    </div>
                    :
                    <Button className='w-100 mt-2' onClick={add}>Comprar</Button>
            }
        </div>
    );
}
