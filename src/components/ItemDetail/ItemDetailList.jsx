import { useEffect, useState } from "react";
import ItemDetail from "./";
import { useCartContext } from "../../Context/hookCartContext";


export default function ItemDetailList({ product }) {
    const { cart, addToCart, isInCart } = useCartContext()
    const [count, setCount] = useState(1)   
    const [inCart, setInCart] = useState(false)

    const handleIncrement = () => {
        if (count <= product.stock)
            setCount(count + 1)
    }

    const handleDecrement = () => {
        if (count > 1)
            setCount(count - 1)
    }

    const onAdd = () => {
        addToCart(product, count)
        console.log(cart)
    }

    useEffect(()=>{
        setInCart(isInCart(product.id))
        if(isInCart(product.id))setCount(cart.find(prod=>prod.id===product.id).quantity)        
    },[product, cart, isInCart])

    return (
        <div className="container d-flex gap-4 my-5 justify-content-center">
            {<ItemDetail key={product.id} product={product} add={onAdd} increment={handleIncrement} decrement={handleDecrement} count={count} isInCart={inCart}/>}
        </div>
    )
}