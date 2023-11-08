import { addDoc, collection } from "firebase/firestore"
import { db } from "./firebase"

const orderRef = collection(db, "orders")

export const createOrder = async (data) => {
    const {id} = await addDoc(orderRef, data)
    return id
}