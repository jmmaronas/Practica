import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import Loading from "../Loading/Loading"
import { getProducts, getProductsByCategory } from "../../services/firebaseServices"


function ItemListContainer() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const { categoryId } = useParams()


    useEffect(() => {
        setLoading(true)
        const asyncFuction = categoryId ? getProductsByCategory : getProducts
        asyncFuction(categoryId)
            .then((result) => {
                setProducts(result)
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(()=>setLoading(false))
    }, [categoryId])

    if (loading) return <h1><Loading/></h1>
    if (error) return <h1>{error}</h1>
    return (
        <ItemList products={products} />
    )
}

export default ItemListContainer