import { useState } from "react";
import { createProdcut } from "../../services/firebaseServices";
import FormList from "../Form/FormList";

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

function NewProduct() {
    const [data, setData] = useState({})
    
    const handleInput = ({ target }) => {
        console.log(`${target.name} : ${target.value}`)
        setData(prevValue => { return { ...prevValue, [target.name]: target.value } })
        console.log(data)
    }
    
    const handleSubmit =async (event) => {
        event.preventDefault()
        try {
            const response= await createProdcut(data)            
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    return ( 
        <FormList  fields={productsFields} data={data} handleInput={handleInput} handleSubmit={handleSubmit} />
     );
}

export default NewProduct;