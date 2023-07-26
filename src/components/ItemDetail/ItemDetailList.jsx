import { useState } from "react";
import ItemDetail from "./";


export default function ItemDetailList({ product }) {
    const [cart, setCart] = useState([])
    const [count, setCount] = useState(1)

    const handleIncrement = () => {
        if (count <= product.stock)
            setCount(count + 1)
    }

    const handleDecrement = () => {
        if (count > 1)
            setCount(count - 1)
    }

    const onAdd = () => {
        if (cart.some(cartItem => cartItem.id === product.id)) {
            setCart(prevValue => {
                prevValue.find(item => item.id === product.id).qty += count
                return prevValue
            })
        } else {
            setCart(prevValue => [...prevValue, { ...product, qty: count }])
        }
        product.stock -= count
        setCount(1)
        console.log(cart)
    }

    return (
        <div className="container d-flex gap-4 my-5 justify-content-center">
            {<ItemDetail key={product.id} product={product} add={onAdd} increment={handleIncrement} decrement={handleDecrement} count={count} />}
        </div>
    )
}