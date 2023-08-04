import { useContext } from "react";
import { cartContext } from "./CartContext";


export const useCartContext = () => {
    return useContext(cartContext)
}