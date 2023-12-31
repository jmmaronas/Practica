import { Link, NavLink } from "react-router-dom";
import CartWidget from "../Cart/CartWidget"
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

export default function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Comision 43315</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">                            
                            <NavDropdown.Item as={NavLink} to="/category/notebook">Notebooks</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/category/desktop">Pc Escritorio</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/category/accesorios">Accesorios</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to='/product_maintenance'>Mentenimiento de Productos</Nav.Link>
                        <CartWidget/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

