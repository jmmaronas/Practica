import { Button, ButtonGroup } from 'react-bootstrap';

export default function ItemCount({ add, increment, decrement, count }) {  

    return (
        <div>
            <ButtonGroup className='w-100' aria-label="Basic example">
                <Button onClick={decrement} variant="secondary">-</Button>
                <Button variant="secondary" disabled>{count}</Button>
                <Button onClick={increment} variant="secondary">+</Button>
            </ButtonGroup>
            
            <Button className='w-100 mt-2' onClick={add}>Comprar</Button>
        </div>
    );
}
