import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  ProgressBar,
  Button,
  Card,
} from "react-bootstrap";

const Status = () => {
  const [progress, setProgress] = useState(80); 

  
  const handleProgress = () => {
    if (progress < 100) {
      setProgress(progress + 25);
    }
  };

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">Rastreo de Envío</h2>
      <Row className="mb-4">
        <Col>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <h4>Estado Actual</h4>
              <div className="progress-container mt-3 mb-3">
                <ProgressBar
                  now={progress}
                  label={`${progress}%`}
                  className="progress-bar-custom"
                />
              </div>
              <div className="d-flex justify-content-between mt-2">
                <small className="text-muted">En proceso</small>
                <small className="text-muted">Entregado</small>
              </div>
              <Button
                variant="primary"
                onClick={handleProgress}
                className="mt-3 w-100"
              >
                Actualizar Estado
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <h4>Detalles del Envío</h4>
              <ul>
                <li>
                  <strong>Detalles del vendedor:</strong> TechShop
                </li>
                <li>
                  <strong>Tiempo estimado de entrega:</strong> 3 días hábiles
                </li>
                <li>
                  <strong>Origen:</strong> Tecnológico de Aguascalientes,
                  Aguascalientes
                </li>
                <li>
                  <strong>Destino:</strong> Zegucom Norte
                </li>
                <li>
                  <strong>Número de seguimiento:</strong> ABC123XYZ
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <h4>Información del Vendedor</h4>
              <ul>
                <li>
                  <strong>Nombre:</strong> TechShop
                </li>
                <li>
                  <strong>Dirección:</strong> Dirección del vendedor
                </li>
                <li>
                  <strong>Teléfono de Contacto:</strong> +52 123 456 7890
                </li>
                <li>
                  <strong>E-mail:</strong> info@techshop.com
                </li>
              </ul>
            </Card.Body>
          </Card>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <h4>Información del Consultor</h4>
              <ul>
                <li>
                  <strong>Nombre:</strong> Nombre del consultor
                </li>
                <li>
                  <strong>Teléfono:</strong> Teléfono del consultor
                </li>
                <li>
                  <strong>Área de Especialización:</strong> Área de
                  especialización del consultor
                </li>
                <li>
                  <strong>E-mail:</strong> consultor@techshop.com
                </li>
              </ul>
            </Card.Body>
          </Card>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <h4>Pedido</h4>
              <ul>
                <li>
                  <strong>Costo Total:</strong> $XXX.XX
                </li>
                <li>
                  <strong>Componentes:</strong> Listado de componentes
                </li>
                <li>
                  <strong>Precio de Envío:</strong> $XX.XX
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Status;
