import React, { useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Wishlist() {
  const [wishlist, setWishlist] = useState([
    { id: 1, name: 'PC Gamer Xtreme', price: 1200.00, img: 'https://www.xtremepc.com.mx/cdn/shop/files/49f41db4-0e94-4b0c-bb3b-e4f3d39f0ba5_800x.png?v=1718379918' },
    { id: 2, name: 'Tarjeta Gráfica NVIDIA RTX 3080', price: 500.00, img: 'https://m.media-amazon.com/images/I/71UStULnUyS._AC_UF894,1000_QL80_.jpg' },
  ]);

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  return (
    <Container className="my-5">
      <h1 className="mb-4">Lista de Deseos</h1>
      <Row>
        {wishlist.map(item => (
          <Col md={6} key={item.id}>
            <Card className="mb-3">
              <Row className="g-0">
                <Col md={4}>
                  <Card.Img src={item.img} alt={item.name} />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>${item.price.toFixed(2)}</Card.Text>
                    <Button variant="danger" size="sm" onClick={() => removeFromWishlist(item.id)}>
                      Eliminar
                    </Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Wishlist;
