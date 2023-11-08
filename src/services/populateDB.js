import { createProdcut } from "./firebaseServices.js";

export const propulateDB = async (arrayProducts) => {
    arrayProducts.forEach(product => {
        delete product.id
        createProdcut(product)
    });
}
