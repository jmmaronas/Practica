import { useEffect, useState } from "react";
import ItemDetail from "./";
import { useCartContext } from "../../Context/hookCartContext";
import ItemCount from "../Count/ItemCount";
import { Card } from "react-bootstrap";


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
        alert(`Producto ${product.nombre} agregardo `)
    }

    useEffect(() => {
        setInCart(isInCart(product.id))
        if (isInCart(product.id)) setCount(cart.find(prod => prod.id === product.id).quantity)
    }, [product, cart, isInCart])

    return (
        <div className="container d-flex gap-4 my-5 justify-content-center">
            {
                <Card className="container p-5" style={{ width: '36rem' }}>
                    <ItemDetail key={product.id} product={product} />
                    <ItemCount product={product} add={onAdd} increment={handleIncrement} decrement={handleDecrement} count={count} isInCart={inCart} />
                </Card>
            }
        </div>
    )
}