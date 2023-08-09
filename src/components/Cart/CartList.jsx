import { Button, Table } from "react-bootstrap";
import { useCartContext } from "../../Context/hookCartContext";
import CartItem from "./CartItem.jsx";
import { Outlet, useNavigate } from "react-router-dom";

function CartList() {
    const { cart, delToCart } = useCartContext()
    const navigate = useNavigate()
    return (
        <div className="d-flex">
            <div className="col-8">
                <Table responsive className="container my-5 text-center" >
                    <thead>
                        <tr>
                            <th>Cantidad</th>
                            <th>Nombre</th>
                            <th>precio</th>
                            <th>Subtotal</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map(item => <CartItem key={item.id} item={item} delItem={delToCart} />)
                        }
                    </tbody>
                    <tfoot className="fw-bolder h3">
                        <tr>
                            <td colSpan={3}>Total de la compra</td>
                            <td colSpan={2}>$ {cart.reduce((acc, item) => acc + (item.quantity * item.precio), 0)}</td>
                        </tr>
                    </tfoot>
                </Table>
                <Button onClick={()=>navigate('/cart/checkout')} variant="warning text-white w-100">Checkout</Button>
            </div>
            <div className="col-3">
                {<Outlet />}
            </div>
        </div>
    );
}

export default CartList;