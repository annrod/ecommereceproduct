import React from "react";
import {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Container, Nav, Navbar, NavDropdown, Form, FormControl } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { userLogout } from "../redux/actions/userActions";
import { useNavigate, useLocation } from "react-router-dom";
//import Loader from '../components/Loader';

const Header = () => {

  const dispatch = useDispatch();
  const userLog = useSelector((state) => state.userLog);
  const { userinfo } = userLog; //userinfo: local storage / userLog: reducer index.js

  const navigate = useNavigate();

  useEffect(() => {
    if (userinfo) {
      navigate("/");
    }
  }, [userinfo]);


  const logOutHandler = () => {
    dispatch(userLogout());
  };

    return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Tienda Virtual</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="button">Buscar</button>
          </Form>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Carrito
                </Nav.Link>
              </LinkContainer>

              {userinfo ? (
                <NavDropdown title={userinfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Mi Perfil</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logOutHandler}>
                    Cerrar Sesión
                  </NavDropdown.Item>
                </NavDropdown>
                 ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Login
                  </Nav.Link>
                </LinkContainer>
                
              )}
              {userinfo && userinfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Gestion de Usuarios</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Gestion de Productos</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Gestion de Ventas</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
