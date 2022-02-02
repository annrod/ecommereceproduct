import React, { useState, useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../redux/actions/userActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.loginUser);
  const { loading, error, valor } = loginUser;

  const navigate = useNavigate();
  console.log(valor);
  useEffect(() => {
    if (valor?.name) {
      navigate("/");
    }
  }, [valor]);

  return (
    <div className="text-center">
      <Row className="justify-content-md-center">
        <Col xs={6} md={4} >
          <Form>
            <h1>Acceso</h1>
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
                  plaintext
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
          </Form>
          <button
            onClick={() => dispatch(userLogin(email, password))}
            className="btn btn-outline-dark"
            type="button"
          >
            Login
          </button>
        </Col>
      </Row>
    </div>
  );
};
export default Login;
