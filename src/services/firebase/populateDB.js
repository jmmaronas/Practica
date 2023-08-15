import { createProdcut } from "./productServices.js";

export const propulateDB = async (arrayProducts) => {
    arrayProducts.forEach(product => {
        console.log(product)
        createProdcut(product)
    });
}
