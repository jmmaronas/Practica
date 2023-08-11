import { useState } from "react";
import { createProdcut, getProductById, updateProductById } from "../../services/firebaseServices";
import FormList from "../Form/FormList";
import { useEffect } from "react";

const productsFields = [
    {
        id: "1",
        title: "Nombre",
        name: "nombre",
        placeholder: "Ingrese nombre del producto",
        type: "text"
    },
    {
        id: "2",
        title: "Stock",
        name: "stock",
        placeholder: "stock del producto",
        type: "number"
    },
    {
        id: "3",
        title: "Precio",
        name: "precio",
        placeholder: "valor del producto",
        type: "number"
    },
    {
        id: "4",
        title: "Categoria",
        name: "category",
        placeholder: "Categoria del producto",
        type: "text"
    },
    {
        id: "5",
        title: "Descripcion",
        name: "descripcion",
        placeholder: "Detalle del producto",
        type: "textarea"
    },
    {
        id: "6",
        title: "URL Imagen",
        name: "url_imagen",
        placeholder: "url de la imagen",
        type: "text"
    }
]

function ProductForm({ productId }) {
    const [data, setData] = useState({})


    const handleInput = ({ target }) => {
        console.log(`${target.name} : ${target.value}`)
        setData(prevValue => { return { ...prevValue, [target.name]: target.value } })
        console.log(data)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            if(productId){
                await updateProductById(data)
                alert("Actualizcion completa")
                return
            }
            const response = await createProdcut(data)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(productId)(async()=>setData(await getProductById(productId)))()
    }, [productId])

    return (
        <FormList title={'Formulario de productos'} fields={productsFields} data={data} handleInput={handleInput} handleSubmit={handleSubmit} />
    );
}

export default ProductForm;