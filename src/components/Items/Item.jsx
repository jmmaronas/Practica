import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Item({ product }) {
  return (
    <Card className='m-auto' style={{ width: '18rem', height: '40rem' }}>
      <div className='d-flex h-75'>
        <Card.Img variant="top" className='object-fit-contain' src={product.url_imagen} />
      </div>
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
