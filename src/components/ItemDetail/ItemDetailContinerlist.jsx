import { useState, useEffect } from "react"
import { getDataById } from "../../services/mockServices"
import { useParams } from "react-router-dom"
import ItemDetailList from "./ItemDetailList"

function ItemDetailListContainer() {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()
    useEffect(() => {
        getDataById(productId)
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