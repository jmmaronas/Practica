import { createContext, useEffect, useState } from "react";


export const cartContext = createContext()

const { Provider } = cartContext

export default function CartContextProvider({ children }) {
    const [cart, setCart] = useState([])
    const [countCartProducts, setCountCartProducts] = useState(null)

    const addToCart = (product, qty) => {
        if (isInCart(product.id)) {
            const cartCopy = cart.slice(0)
            cartCopy.find(prod => prod.id === product.id).quantity+=qty
            setCart(cartCopy)
        } else {
            setCart([...cart, { ...product, quantity: qty }])
        }
    }

    const deltTocart = (id) => {
        setCart(cart.filter(prod => prod.id !== id))
    }

    const clearCart=()=>{
        setCart([])
    }
    const isInCart = (productId) => {
        return cart.some(prod => prod.id === productId)
    }

    useEffect(()=>{
        setCountCartProducts(cart.reduce((acc, prod)=>acc+prod.quantity,0))
    }, [cart])

    const values = {
        cart,
        addToCart,
        deltTocart,
        clearCart,
        isInCart,
        countCartProducts
    }

    return (
        <Provider value={values}>
            {children}
        </Provider>
    )
}

