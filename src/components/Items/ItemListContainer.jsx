import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import Loading from "../Loading/Loading"
import { getProducts, getProductsByCategory } from "../../services/firebase/productServices"


function ItemListContainer() {
    const [products, setProducts] = useState({})
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()


    useEffect(() => {


        const asyncFuction = categoryId ? getProductsByCategory : getProducts
        asyncFuction(categoryId)
            .then((result) => {
                setProducts(result)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [categoryId])
    if (loading) return <h1><Loading/></h1>
    return (
        <ItemList products={products} />
    )
}

export default ItemListContainer