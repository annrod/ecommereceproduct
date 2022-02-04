import React, { useState, useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { userLogin } from "../redux/actions/userActions";
import Loader from '../components/Loader';
import Message from '../components/Message';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const dispatch = useDispatch();
  const userLog = useSelector((state) => state.userLog);
  const { loading, error, userinfo } = userLog;

   
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userLogin(email, password));
  };

  return (
    <div className="text-center">
      <Row className="justify-content-md-center">
        <Col xs={6} md={4}>
          <Form onSubmit={submitHandler}>
            <h1>Acceso</h1>
              {error && <Message variant='danger'>{error}</Message>}
              {loading ? (
                <Loader />
                  ) : (
                    <>
            <p></p>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  placeholder="Correo electrónico"
                  //plaintext
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Col>
            </Form.Group>
            <button className="btn btn-outline-dark" type="submit">
            Login
          </button>
          <p></p>
          <Row className='py-3'>
            <Col>
              Nuevo usuario? {' '}
              <Link to={'/newuser'}>
                Crear cuenta
              </Link>
            </Col>
          </Row>
          </>
           )}
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
