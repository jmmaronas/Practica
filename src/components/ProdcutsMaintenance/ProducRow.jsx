import { Button } from "react-bootstrap";
import {useNavigate} from 'react-router-dom'

function ProductRow({product}) {
    const navigate = useNavigate()
    return ( 
        <tr>
            <td>{product.nombre}</td>
            <td>{product.category}</td>
            <td>{product.descripcion}</td>
            <td>{product.precio}</td>
            <td>{product.stock}</td>
            <td>
                <div className="d-flex gap-2 justify-content-center">
                <Button onClick={()=>navigate(`update/${product.id}`)}>Update</Button>
                <Button variant="danger">Delete</Button>
                </div>
            </td>
        </tr>
     );
}

export default ProductRow;
