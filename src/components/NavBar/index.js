import Container from 'react-bootstrap/Container';
import Nav    from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const navLinkStyles = ({ isActive }) =>  isActive ?  "active"  : "inactive" ;

const NavBar = () => {
   return (
       <Navbar bg="light" variant="light" className="mb-5">
           <Container fluid>
               <Nav className="categorias">
                   <Nav.Link as="li" key="texto">
                       <NavLink to="/texto-original"  className={navLinkStyles}>Texto Original</NavLink>
                   </Nav.Link> 
                   <Nav.Link as="li" key="textoipa">
                       <NavLink to="/texto-ipa"       className={navLinkStyles}>Texto-IPA</NavLink>
                   </Nav.Link> 
                   <Nav.Link as="li" key="palabraipa">
                       <NavLink to="/palabra-ipa"       className={navLinkStyles}>Palabra-IPA</NavLink>
                   </Nav.Link> 
                   <Nav.Link as="li" key="vocabulario">
                       <NavLink to="/vocabulario" className={navLinkStyles}>Vocabulario</NavLink>
                   </Nav.Link> 
               </Nav>
           </Container>
       </Navbar>
   );
}

export default NavBar;
