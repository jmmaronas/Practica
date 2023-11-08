import { Form } from 'react-bootstrap';

function FormItem({ field, data, handleInput }) {
    return (
        <Form.Group className="mb-3" controlId={field.title}>
            <Form.Label>{field.title}</Form.Label>
            {   field.type==="textarea"
                ?
                <Form.Control 
                onInput={handleInput}
                as={field.type}
                rows="4"
                placeholder={field.placeholder}
                name={field.name}
                defaultValue={data[field.name] || ""}
                />
                :
                <Form.Control 
                onInput={handleInput}                
                type={field.type}
                placeholder={field.placeholder}
                name={field.name}
                value={data[field.name] || ""}
                />
            }
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
    )
}
export default FormItem;