import React from 'react';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ShoppingCart() {
  return (
    <Container className="my-5">
      <h1 className="mb-4 text-center">Carrito de Compras</h1>
      <Row>
        <Col md={8}>
          <Card className="mb-3 shadow-sm">
            <Row className="g-0">
              <Col md={4}>
                <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcZyJwRDqyEVPV17IkUw-RZlxkrQx-oxUTDQ&s" alt="PC Gamer" />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>PC Gamer</Card.Title>
                  <Card.Text>$1200.00</Card.Text>
                  <Card.Text>
                    <small className="text-muted">
                      Cantidad: <Form.Control type="number" defaultValue="1" min="1" className="w-25 d-inline-block" />
                    </small>
                  </Card.Text>
                  <Button variant="danger" size="sm">Eliminar</Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Row className="g-0">
              <Col md={4}>
                <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcZyJwRDqyEVPV17IkUw-RZlxkrQx-oxUTDQ&s" alt="Tarjeta Gráfica" />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>Tarjeta Gráfica</Card.Title>
                  <Card.Text>$500.00</Card.Text>
                  <Card.Text>
                    <small className="text-muted">
                      Cantidad: <Form.Control type="number" defaultValue="1" min="1" className="w-25 d-inline-block" />
                    </small>
                  </Card.Text>
                  <Button variant="danger" size="sm">Eliminar</Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Row className="g-0">
              <Col md={4}>
                <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcZyJwRDqyEVPV17IkUw-RZlxkrQx-oxUTDQ&s" alt="SSD 1TB" />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>SSD 1TB</Card.Title>
                  <Card.Text>$150.00</Card.Text>
                  <Card.Text>
                    <small className="text-muted">
                      Cantidad: <Form.Control type="number" defaultValue="1" min="1" className="w-25 d-inline-block" />
                    </small>
                  </Card.Text>
                  <Button variant="danger" size="sm">Eliminar</Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Resumen del Pedido</Card.Title>
              <Card.Text>Subtotal: $1850.00</Card.Text>
              <Card.Text>Envío: $50.00</Card.Text>
              <h5>Total: $1900.00</h5>
              <Button variant="primary" className="w-100 mt-3">Proceder al Pago</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ShoppingCart;
