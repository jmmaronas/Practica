import { Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Item({product}) {
  return (
    <Card className='m-auto' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.url_imagen} />
      <Card.Body>
        <Card.Title>{product.nombre}</Card.Title>
        <Card.Text>
          {product.descripcion}
        </Card.Text>
        <Card.Subtitle className='text-center my-3'>$ {product.precio} </Card.Subtitle>
        
        <Button as={Link} to={`/product/${product.id}`} className='btn btn-danger w-100 my-2'> Ver datalles</Button>
      </Card.Body>
    </Card>
  );
}
