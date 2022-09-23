import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import NavBar from './components/NavBar';
import {TextoProvider} from './context/';
import TextoOriginal from './components/TextoOriginal';
import TextoIpa from './components/TextoIpa';
import PalabraIpa from './components/PalabraIpa';
import Vocabulario from './components/Vocabulario';



function App() {

  return (
    <>
    <NavBar/>
        <TextoProvider>
            <Container >
                <Row>
                    <Col>
                        <Routes>
                            <Route path="/" element={<TextoOriginal />}/>
                            <Route path="/texto-original" element={<TextoOriginal />}/>
                            <Route path="/texto-ipa" element={<TextoIpa />}/>
                            <Route path="/palabra-ipa" element={<PalabraIpa />}/>
                            <Route path="/vocabulario" element={<Vocabulario />}/>
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </TextoProvider>
    </>
  );
}

export default App;

  
       


