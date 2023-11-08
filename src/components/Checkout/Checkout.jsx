import FormList from '../Form/FormList';
import { useState } from 'react';
import { createOrder } from '../../services/firebaseServices';
import { useCartContext } from '../../Context/hookCartContext';
import { serverTimestamp } from 'firebase/firestore';

const usersFields=[
    {
        id: "1",
        title: "Nombre",
        name: "nombre",
        placeholder: "Ingrese nombre del producto",
        type: "text"
    },
    {
        id: "2",
        title: "Email",
        name: "email",
        placeholder: "nombre@proveedor.com",
        type: "email"
    },
    {
        id: "3",
        title: "Numero de telefono",
        name: "phone",
        placeholder: "11-1111-2222",
        type: "text"
    }
]

function Checkout( ) {
    const [data, setData] = useState({})
    const { cart } = useCartContext()

    const handleInput = ({ target }) => {
        console.log(`${target.name} : ${target.value}`)
        setData(prevValue => { return { ...prevValue, [target.name]: target.value } })
        console.log(data)
    }
    
    const handleSubmit =async (event) => {
        event.preventDefault()
        try {
            console.log(serverTimestamp())
            const response= await createOrder({userData:data, items:{cart, date: serverTimestamp()}})
            console.log(response)
            setData({})

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <FormList fields={usersFields} data={data} title={"Datos del cliente"} handleInput={handleInput} handleSubmit={handleSubmit} />
    );
}

export default Checkout