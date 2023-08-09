import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetailList from "./ItemDetailList"
import { getProductById } from "../../services/firebaseServices"

function ItemDetailListContainer() {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()
    useEffect(() => {
        getProductById(productId)
            .then((result => {
                setProduct(result)
                setLoading(false)
            }))
            .catch((error) => {
                console.log(error)
            })
    }, [productId])
    if (loading) return <h1>Loading....</h1>
    return (
        <ItemDetailList product={product} />
    )
}

export default ItemDetailListContainer