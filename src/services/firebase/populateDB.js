import { createProdcut } from "./productServices.js";

export const propulateDB = async (arrayProducts) => {
    arrayProducts.forEach(product => {
        delete product.id
        createProdcut(product)
    });
}
