import { useState } from "react";
import Item from "./Item";


export default function ItemList({ products }) {
    const [cart, setCart] = useState([])
    const onAdd = (product, qty) => {
        console.log({...product, qty})
        if(cart.some(cartItem=>cartItem.id===product.id)){
            const itemFound = cart.find(item=>item.id===product.id).qty+=qty 
            setCart(prevValue=>[...prevValue, itemFound])
        }else{
            setCart(prevValue=>[...prevValue, { ...product, qty }])
        }
        console.log(cart)
    }

    return (
        <div className="container d-flex gap-4 my-5">
            {products.map(product => <Item key={product.id} product={product} add={onAdd} />)}
        </div>
    )
}