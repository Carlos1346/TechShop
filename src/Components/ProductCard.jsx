import React from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div style={{ marginTop: "20px" }} >
    <Card className="mb-4 shadow-sm">
      <Card.Img 
        variant="top" 
        src={product.image} 
        alt={product.name} 
        style={{ width: '100%', height: '300px'}} 
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text className="text-muted">${product.price}</Card.Text>
        <ButtonGroup className="w-100">
          <Button as={Link} to="/product" variant="outline-primary">Ver detalles</Button>
          <Button variant="outline-success">Agregar al carrito</Button>
          <Button variant="primary">Comprar</Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
    </div>
  );
};

export default ProductCard;
