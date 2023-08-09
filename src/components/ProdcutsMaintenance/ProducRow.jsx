import { Button } from "react-bootstrap";

function ProductRow({product}) {
    return ( 
        <tr>
            <td>{product.nombre}</td>
            <td>{product.category}</td>
            <td>{product.descripcion}</td>
            <td>{product.precio}</td>
            <td>{product.stock}</td>
            <td><Button variant="danger">Delete</Button></td>
        </tr>
     );
}

export default ProductRow;
