import React from 'react';
import { Carousel, Card, Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCcVisa, FaCcMastercard, FaCcStripe, FaPaypal, FaUniversity } from 'react-icons/fa';


// Estilos en línea
const containerStyle = { marginTop: '3rem' };
const carouselItemStyle = { height: '500px' };
const cardStyle = { boxShadow: '20px 20px 20px rgba(0, 0, 0, 0.1)', backgroundColor: 'white', padding: '20px', borderRadius: '10px' };

const mediaStyle = { width: '64px', height: '64px' };
const ratingStyle = { fontSize: '1.2rem' };

function ProductDetail() {
  

  const handleStripeRedirect = () => {
    window.location.href = "https://buy.stripe.com/test_aEU2caa2agxleEUaEE";
  };

  return (
    <Container style={containerStyle}>
      <Row>
        <Col md={6}>
          {/* Carrusel de Imágenes del Producto */}
          <Carousel>
            <Carousel.Item style={carouselItemStyle}>
              <img
                className="d-block w-80"
                src="https://http2.mlstatic.com/D_NQ_NP_747615-MLU75977439702_052024-O.webp"
                alt="Imagen del Producto 1"
              />
            </Carousel.Item>
            <Carousel.Item style={carouselItemStyle}>
              <img
                className="d-block w-80"
                src="https://http2.mlstatic.com/D_NQ_NP_962307-MLU75977479004_052024-O.webp"
                alt="Imagen del Producto 2"
              />
            </Carousel.Item>
            <Carousel.Item style={carouselItemStyle}>
              <img
                className="d-block w-80"
                src="https://http2.mlstatic.com/D_NQ_NP_619436-MLU75977479020_052024-O.webp"
                alt="Imagen del Producto 3"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={6}>
          <div style={cardStyle}>
            <h2>Computadora Gamer Intel Core i9</h2>
            <p>
              Esta PC es ideal para una variedad de tareas, incluyendo juegos, stream, edición de fotos, video y
              más. La mejor opción para juegos de alto rendimiento, capaz de ejecutar una amplia gama de juegos
              populares, incluyendo Call of Duty Warzone, Escape from Tarkov, GTA V, Diablo IV, CSGO, Battlefield
              V, Minecraft con Shaders, Elden Ring, The Division 2, Hogwarts Legacy, entre otros.
            </p>
            <p>Procesador: Intel Core i9</p>
            <p>RAM: 32GB</p>
            <p>Almacenamiento: 1TB SSD</p>
            <p>Tarjeta Gráfica: NVIDIA RTX 3080</p>
            <p>Stock: 12 piezas</p>
            <h3 className="text-success">$12,499.99</h3>
            
          </div>
        </Col>
      </Row>
      
      {/* Sección de Métodos de Pago */}
      <Row style={{ marginTop: '3rem' }}>
        <Col>
          <Card className="mt-3 shadow-sm">
            <Card.Body>
              <Card.Title>Métodos de Pago</Card.Title>
              <div className="d-grid gap-2">
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="d-flex align-items-center justify-content-center"
                >
                  <FaCcVisa className="me-2" /> Visa
                </Button>
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="d-flex align-items-center justify-content-center"
                >
                  <FaCcMastercard className="me-2" /> MasterCard
                </Button>
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="d-flex align-items-center justify-content-center"
                  onClick={handleStripeRedirect}
                >
                  <FaCcStripe className="me-2" /> Stripe
                </Button>
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="d-flex align-items-center justify-content-center"
                >
                  <FaPaypal className="me-2" /> PayPal
                </Button>
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="d-flex align-items-center justify-content-center"
                >
                  <FaUniversity className="me-2" /> Transferencia Bancaria
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Sección de Reseñas */}
      <Row style={{ marginTop: '3rem' }}>
        <Col>
          <h4>Reseñas de Usuarios</h4>
          <Card style={{ ...cardStyle, marginBottom: '1rem' }}>
            <Card.Body>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src="https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721088000&semt=sph"
                  style={mediaStyle}
                  alt="Usuario 1"
                />
                <div style={{ marginLeft: '1rem' }}>
                  <h5>Usuario 1</h5>
                  <p>Excelente computadora, muy rápida y cumple con todas mis expectativas.</p>
                  <span style={ratingStyle}>★★★★★</span>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card style={cardStyle}>
            <Card.Body>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src="https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg"
                  style={mediaStyle}
                  alt="Usuario 2"
                />
                <div style={{ marginLeft: '1rem' }}>
                  <h5>Usuario 2</h5>
                  <p>Muy buen producto, aunque el precio es un poco alto.</p>
                  <span style={ratingStyle}>★★★★☆</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
