import { datamock } from "./db_products"

export const getData = () => {
    return new Promise((resolve, reject) => {
        let error = false;
        setTimeout(() => {
            if (error) {
                reject("Item not found");
            } else {
                resolve(datamock);
            }
        }, 2000)
    })
}

export const getDataById = (id) => {
    return new Promise((resolve, reject) => {
        let error = false;
        setTimeout(() => {
            if (error) {
                reject("Item not found");
            } else {
                resolve(datamock.find((item) => item.id === id))
            }
        }, 2000)
    })
}

export const getDataByCategory = (category) => {
    return new Promise((resolve,reject) => {
        let error = false;
        setTimeout(() => {
            if (error) {
                reject("Item not found");
            } else {
                resolve(datamock.filter((item) => item.category === category))
            }
        }, 2000)
    })
}