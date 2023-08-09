import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CartItem({ item, delItem }) {
    const navigate=useNavigate()
    return (
        <tr>
            <td>{item.quantity}</td>
            <td>{item.nombre}</td>
            <td>{item.precio}</td>
            <td>{item.precio * item.quantity}</td>
            <td>
                <div className="d-flex justify-content-around">
                    <Button onClick={() => delItem(item.id)} variant="danger">Del</Button>
                    <Button onClick={()=>navigate(`/product/${item.id}`)} >Edit</Button>
                </div>
            </td>
        </tr>
    );
}

export default CartItem;