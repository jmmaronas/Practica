import { Button, Form } from 'react-bootstrap';
import FormItem from './FormItem';
import { useState } from 'react';

const fields = [
    {
        id: "1",
        title: "Nombre y Apellido",
        name: "username",
        placeholder: "Ingrese su nombre",
        type: "text"
    },
    {
        id: "2",
        title: "Correo electronico",
        name: "email",
        placeholder: "cuante@provedor.com",
        type: "email"
    },
    {
        id: "3",
        title: "Password",
        name: "password",
        placeholder: "Ingrese una contraseña",
        type: "password"
    },
    {
        id: "3",
        title: "Descripcion",
        name: "description",
        placeholder: "Descripcion del usuario",
        type: "textarea"
    }
]


function FormList() {
    const [data, setData] = useState({})

    const handleInput = ({ target }) => {
        console.log(`${target.name} : ${target.value}`)
        setData(prevValue => { return { ...prevValue, [target.name]: target.value } })
        console.log(data)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
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