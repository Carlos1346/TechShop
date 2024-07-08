import React from 'react';
import { Card, ListGroup, ListGroupItem, Button, Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserProfile = () => {
  const user = {
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    phone: '123-456-7890',
    address: 'Calle Falsa 123, Ciudad Ficticia, País Imaginario',
    profileImage: 'https://i0.wp.com/www.otero.uy/wp-content/uploads/2023/03/fotos-para-perfil-de-linkedin-hombre-2.jpg?fit=1080%2C1080&ssl=1', // URL de imagen de perfil
    orders: [
      {
        id: '12345',
        date: '2024-07-01',
        total: '1200.00',
        items: [
          { name: 'PC Armada Gamer', price: '1000.00' },
          { name: 'Teclado Mecánico', price: '100.00' },
          { name: 'Ratón Gamer', price: '100.00' }
        ]
      },
      {
        id: '67890',
        date: '2024-06-25',
        total: '650.00',
        items: [
          { name: 'Tarjeta Gráfica', price: '650.00' }
        ]
      }
    ]
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <Card className="mt-4">
            <Card.Header as="h5">Perfil de Usuario</Card.Header>
            <Card.Body>
              <Row>
                <Col md="4">
                  <Image src={user.profileImage} roundedCircle fluid />
                </Col>
                <Col md="8">
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Text>
                    <strong>Email:</strong> {user.email}
                  </Card.Text>
                  <Card.Text>
                    <strong>Teléfono:</strong> {user.phone}
                  </Card.Text>
                  <Card.Text>
                    <strong>Dirección:</strong> {user.address}
                  </Card.Text>
                  <Button variant="primary" onClick={() => alert('Editar perfil')}>Editar Perfil</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-4">
        <Col md="8">
          <h4>Pedidos Recientes</h4>
          {user.orders.map((order, index) => (
            <Card className="mb-3" key={index}>
              <Card.Header>Pedido #{order.id}</Card.Header>
              <ListGroup className="list-group-flush">
                <ListGroupItem><strong>Fecha:</strong> {order.date}</ListGroupItem>
                <ListGroupItem><strong>Total:</strong> ${order.total}</ListGroupItem>
                <ListGroupItem>
                  <strong>Artículos:</strong>
                  <ul>
                    {order.items.map((item, idx) => (
                      <li key={idx}>{item.name} - ${item.price}</li>
                    ))}
                  </ul>
                </ListGroupItem>
              </ListGroup>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
