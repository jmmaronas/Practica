import { Card} from 'react-bootstrap';
import ItemCount from '../Count/ItemCount';


export default function Item({product, add, increment, decrement, count, isInCart}) {
  return (
    <Card style={{ width: '26rem' }}>
      <Card.Img variant="top" src={product.url_imagen} />
      <Card.Body>
        <Card.Title>{product.nombre}</Card.Title>
        <Card.Text>
          {product.descripcion}
        </Card.Text>
        <Card.Subtitle className='text-center my-3'>$ {product.precio} </Card.Subtitle>
        <ItemCount product={product} add={add} increment={increment} decrement={decrement} count={count} isInCart={isInCart}/>
      </Card.Body>
    </Card>
  );
}
