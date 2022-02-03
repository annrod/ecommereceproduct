import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Form, Row, Col, FormGroup, FormLabel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { registerUsers } from '../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';

const NewUser = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const uRegister = useSelector((state) => state.uRegister);
  const { loading, error, valor } = uRegister;

  
  const navigate = useNavigate();

  const location = useLocation();
  const redirect = location.search ? location.search.split('=')[1] : '/';

    useEffect(() => {
    if (valor) {
      setEmail("");
      setName("");
    }
  }, [valor]);

  const submitHandler = () => {
    dispatch(registerUsers(name, email, password))
    navigate("/login")
  };

  return (
    <div>
  
      <h1>Registro de usuario</h1>

      {error && <Message variant='danger'>{error}</Message>}
      {loading ? (
        <Loader />
      ) : (
        <>
          <Form>
            <FormGroup controlId='name' className='mb-2'>
              <FormLabel>Nombre</FormLabel>
              <Form.Control
                type='name'
                placeholder='Ingrese nombre'
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }></Form.Control>
            </FormGroup>
            <FormGroup controlId='email' className='mb-2'>
              <FormLabel>E-mail</FormLabel>
              <Form.Control
                type='email'
                placeholder='Ingrese email'
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }></Form.Control>
            </FormGroup>
            <FormGroup controlId='password' className='mb-2'>
              <FormLabel>Contraseña</FormLabel>
              <Form.Control
                type="password"
                placeholder="Ingrese contraseña"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }></Form.Control>
            </FormGroup>
            <FormGroup controlId='confirmPassword' className='mb-3'>
              <FormLabel>Confirmar contraseña</FormLabel>
              <Form.Control
                type="password"
                placeholder="Ingrese nuevamente la contraseña"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }></Form.Control>
            </FormGroup>
            <button className="btn btn-outline-dark" type="button"
            onClick={submitHandler}>
              Registrarse
            </button>
          </Form>
          <Row className='py-3'>
            <Col>
              Ya tienes una cuenta?{' '}
              <Link to={redirect ? `/login?redirect=/${redirect}` : '/login'}>
                Iniciar Sesión
              </Link>
            </Col>
          </Row>
        </>
      )}
    
    </div>
    
  );
};

export default NewUser;