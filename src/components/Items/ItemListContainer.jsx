import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getData, getDataByCategory } from "../../services/mockServices"
import ItemList from "./ItemList"

function ItemListContainer() {
    const [products, setProducts] = useState({})
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFuction = categoryId ? getDataByCategory : getData
        asyncFuction(categoryId)
            .then((result) => {
                console.log(result)
                setProducts(result)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [categoryId])
    if (loading) return <h1>Loading....</h1>
    return (
        <ItemList products={products} />
    )
}

export default ItemListContainer