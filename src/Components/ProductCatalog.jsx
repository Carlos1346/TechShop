import React, { useState } from 'react';
import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap';

const ProductCatalog = () => {
  
  const products = [
    { id: 1, name: 'PC Gamer A', price: 1200, category: 'PC Armadas' },
    { id: 2, name: 'Tarjeta Gráfica XYZ', price: 500, category: 'Componentes' },
    { id: 3, name: 'Procesador ABC', price: 300, category: 'Componentes' },
    { id: 4, name: 'Monitor HD', price: 250, category: 'Periféricos' },
    { id: 5, name: 'Teclado Mecánico', price: 150, category: 'Periféricos' },
    { id: 6, name: 'Memoria RAM 16GB', price: 120, category: 'Componentes' },
  ];

  
  const [sortType, setSortType] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  
  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  
  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  
  const filteredProducts = products.filter(product => {
    if (categoryFilter === '') {
      return true; 
    } else {
      return product.category === categoryFilter;
    }
  }).sort((a, b) => {
    if (sortType === 'price-lowest') {
      return a.price - b.price;
    } else if (sortType === 'price-highest') {
      return b.price - a.price;
    } else {
      return 0; 
    }
  });

  
  const uniqueCategories = [...new Set(products.map(product => product.category))];

  return (
    <Container className="my-4">
      <Row className="justify-content-center mb-3">
        <Col md={3}>
          <Form.Select onChange={handleCategoryChange} value={categoryFilter} aria-label="Filtrar por categoría">
            <option value="">Todas las categorías</option>
            {uniqueCategories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </Form.Select>
        </Col>
        <Col md={3}>
          <Form.Select onChange={handleSortChange} value={sortType} aria-label="Ordenar por">
            <option value="">Ordenar por...</option>
            <option value="price-lowest">Precio más bajo</option>
            <option value="price-highest">Precio más alto</option>
          </Form.Select>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredProducts.map(product => (
          <Col key={product.id}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="text-muted mb-2">{product.category}</Card.Text>
                <Card.Text className="mb-0 fw-bold">${product.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {filteredProducts.length === 0 && (
        <Row className="mt-4">
          <Col className="text-center">
            <p>No hay productos disponibles.</p>
            <Button variant="outline-primary" href="#" className="text-decoration-none">
              Volver a cargar productos
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ProductCatalog;