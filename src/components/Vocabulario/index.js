import { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import TextoContext from '../../context'; 

const Tr = () => {
    const {vocabulary} = useContext(TextoContext);
    const t = vocabulary.map((item, indx) => <tr key={indx}><td>{item.qt}</td><td>{item.palabra}</td><td>{item.ipaPalabra}</td></tr>);

    return t;

};


function Vocabulario() {
  
  return (
    <Table  responsive striped bordered size="sm" >
      <thead>
        <tr>
          <th>#</th>
          <th>Palabra</th>
          <th>IPA</th>
        </tr>
      </thead>
      <tbody>
          <Tr/>
      </tbody>
    </Table>
  );
}



export default Vocabulario;
