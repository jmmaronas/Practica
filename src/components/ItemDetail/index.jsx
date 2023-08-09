import { Card } from 'react-bootstrap';


export default function Item({ product }) {
  return (
    <>
      <Card.Img variant="top" src={product.url_imagen} />
      <Card.Body>
        <Card.Title>{product.nombre}</Card.Title>
        <Card.Text>
          {product.descripcion}
        </Card.Text>
        <Card.Subtitle className='text-center my-3'>$ {product.precio} </Card.Subtitle>
      </Card.Body>
    </>
  );
}
