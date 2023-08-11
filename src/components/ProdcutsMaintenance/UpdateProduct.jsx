import ProductForm from "./ProductForm"
import { useParams } from 'react-router-dom'

function UpdateProduct() {
    const { productId } = useParams()
    return ( 
        <ProductForm productId={productId}/>
     )
}

export default UpdateProduct;