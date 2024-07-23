import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Accordion,
  Form,
} from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaQuestionCircle } from "react-icons/fa";

const styles = {
  chatContainer: {
    padding: "20px",
    backgroundColor: "#f9f9f9",
  },
  chatTitle: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "2rem",
    color: "#343a40",
  },
  chatCard: {
    marginBottom: "20px",
    borderRadius: "10px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
  },
  chatCardHover: {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "space-around",
    fontSize: "1.5rem",
  },
  socialIcon: {
    color: "#007bff",
    cursor: "pointer",
    transition: "color 0.3s ease",
  },
  socialIconHover: {
    color: "#0056b3",
  },
  customFormControl: {
    borderRadius: "10px",
  },
  primaryButton: {
    backgroundColor: "#007bff",
    borderColor: "#007bff",
    borderRadius: "30px",
    padding: "10px 20px",
  },
  primaryButtonHover: {
    backgroundColor: "#0056b3",
    borderColor: "#0056b3",
  },
  icon: {
    marginRight: "8px",
  },
};

const ChatComponent = () => {
  return (
    <Container style={styles.chatContainer}>
      <Row>
        <Col md={6} lg={6}>
          <Card
            style={styles.chatCard}
            className="shadow-lg"
            onMouseEnter={(e) =>
              (e.currentTarget.style = {
                ...styles.chatCard,
                ...styles.chatCardHover,
              })
            }
            onMouseLeave={(e) => (e.currentTarget.style = styles.chatCard)}
          >
            <Card.Body>
              <Card.Title><FaQuestionCircle style={styles.icon} /> Preguntas Frecuentes</Card.Title>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>¿Cómo hago un pedido?</Accordion.Header>
                  <Accordion.Body>
                    Para hacer un pedido, selecciona los productos que deseas y
                    sigue las instrucciones en la pantalla.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    ¿Cuáles son los métodos de pago aceptados?
                  </Accordion.Header>
                  <Accordion.Body>
                    Aceptamos tarjetas de crédito, PayPal y transferencias
                    bancarias.
                  </Accordion.Body>
                </Accordion.Item>
                {/* Añade más preguntas frecuentes aquí */}
              </Accordion>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={6}>
          <Card
            style={styles.chatCard}
            className="shadow-lg"
            onMouseEnter={(e) =>
              (e.currentTarget.style = {
                ...styles.chatCard,
                ...styles.chatCardHover,
              })
            }
            onMouseLeave={(e) => (e.currentTarget.style = styles.chatCard)}
          >
            <Card.Body>
              <Card.Title><FaFacebookF style={styles.icon} /> Redes Sociales</Card.Title>
              <Card.Text>
                Conéctate con nosotros en nuestras redes sociales.
              </Card.Text>
              <div style={styles.socialIcons}>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
                  <FaFacebookF />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
                  <FaTwitter />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
                  <FaInstagram />
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={12}>
          <Card
            style={styles.chatCard}
            className="shadow-lg"
            onMouseEnter={(e) =>
              (e.currentTarget.style = {
                ...styles.chatCard,
                ...styles.chatCardHover,
              })
            }
            onMouseLeave={(e) => (e.currentTarget.style = styles.chatCard)}
          >
            <Card.Body>
              <Card.Title><FaEnvelope style={styles.icon} /> Correo Electrónico</Card.Title>
              <Card.Text>
                Envíanos un mensaje y responderemos lo antes posible.
              </Card.Text>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingresa tu correo electrónico"
                    style={styles.customFormControl}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicMessage">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Escribe tu mensaje aquí"
                    style={styles.customFormControl}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  style={styles.primaryButton}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style = {
                      ...styles.primaryButton,
                      ...styles.primaryButtonHover,
                    })
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style = styles.primaryButton)
                  }
                >
                  Enviar Mensaje
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ChatComponent;
