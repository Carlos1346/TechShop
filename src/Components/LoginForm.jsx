import React from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '65vh' }}>
      <Row className="w-100">
        <Col md={6} lg={6} className="mx-auto">
          <Card className="shadow">
            <Card.Body>
              <h2 className="text-center mb-4">Iniciar Sesión</h2>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control type="email" placeholder="Ingresa tu correo electrónico" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Ingresa tu contraseña" required />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Iniciar Sesión
                </Button>
                <div className="text-center mt-3">
                  <a href="/register">¿No tienes una cuenta? Regístrate</a>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
