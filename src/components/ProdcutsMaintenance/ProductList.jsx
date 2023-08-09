import { Table } from "react-bootstrap";
import ProductRow from "./ProducRow";

function ProductList({ products }) {
    return (
        <Table className="text-center">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Categoria</th>
                    <th>Descirpcion</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product)=><ProductRow key={product.id} product={product}/>)}
            </tbody>
        </Table>
    );
}

export default ProductList;