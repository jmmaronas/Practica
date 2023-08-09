import { Button, Form } from 'react-bootstrap';
import FormItem from './FormItem';


function FormList( {fields, data, title, handleInput, handleSubmit} ) {
    
    return (
        <div className='container my-5'>
            <h2 className='my-4 text-decoration-underline'>{title}</h2>
            <Form onSubmit={handleSubmit}>
                {fields.map(field => <FormItem key={field.id} field={field} data={data} handleInput={handleInput} />)}
                <div className='d-flex w-100'>
                    <Button className='' type='submit' variant='primary'>Confirmar</Button>
                </div>
            </Form>
        </div>
    );
}

export default FormList