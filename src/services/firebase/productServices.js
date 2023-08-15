import { addDoc, collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore"
import { db } from "./firebase.js"

const prodcutRef = collection(db, "products")

export const getProducts = async () => {
    const products = []
    const snapshot = await getDocs(prodcutRef)
    snapshot.forEach(doc => {
        products.push({ id: doc.id, ...doc.data() })
    })
    return products
}

export const getProductsByCategory = async (category) => {
    const products = []
    const q = query(prodcutRef, where("category", "==", category))
    const snapshot = await getDocs(q)
    snapshot.forEach(doc => {
        products.push({ id: doc.id, ...doc.data() })
    })
    return products
}


export const getProductById = async (productId) => {
    const snapshot = await getDoc(doc(db, "products", productId))
    if (snapshot.exists()) {
        return { id: snapshot.id, ...snapshot.data() }
    }

}

export const updateProductById = async (product) => {
    const {id} = product
    delete product.id
    await setDoc(doc(db, "products", id), product)    
}

export const createProdcut = async (prodcut) => {
    console.log(prodcut)
    const result = await addDoc(prodcutRef, prodcut)
    console.log(result)
    return result
}

