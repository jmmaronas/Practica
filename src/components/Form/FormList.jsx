import { Button, Form } from 'react-bootstrap';
import FormItem from './FormItem';
import { useState } from 'react';
import { createProdcut } from '../../services/firebaseServices';

const fields = [
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


function FormList() {
    const [data, setData] = useState({})

    
    const handleInput = ({ target }) => {
        console.log(`${target.name} : ${target.value}`)
        setData(prevValue => { return { ...prevValue, [target.name]: target.value } })
        console.log(data)
    }
    
    const handleSubmit =async (event) => {
        event.preventDefault()
        console.log(data)
        try {
            const response= await createProdcut(data)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
        console.log(data)
    }

    return (
        <div className='container my-5'>
            <h2 className='my-4'>Formulario de Registro</h2>
            <Form onSubmit={handleSubmit}>
                {fields.map(field => <FormItem key={field.id} field={field} data={data} handleInput={handleInput} />)}
                <div className='d-flex w-100'>
                    <Button className='' type='submit' variant='primary'>Enviar</Button>
                </div>
            </Form>
        </div>
    );
}

export default FormList