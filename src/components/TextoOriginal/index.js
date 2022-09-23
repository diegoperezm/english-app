import {useContext } from 'react';
import Form from 'react-bootstrap/Form';
import TextoContext from '../../context/'

const Texto = () => {
  const {setTexto, texto} = useContext(TextoContext) 
  const handleChange = evt => setTexto(evt.target.value) 
    
    return (
        <>
            <Form>
                <Form.Group 
                    className="mb-3" 
                    controlId="text.ControlTextarea">
                    <Form.Label>Texto Original: </Form.Label>
                    <Form.Control 
                        className="textoArea"
                        as="textarea" 
                        rows={10}
                        onChange={handleChange}
                        value={texto}
                    />
                </Form.Group>
            </Form>
        </>
    )
}


export default Texto;
