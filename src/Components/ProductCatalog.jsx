import React, { useState } from 'react';
import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaShoppingCart, FaInfoCircle } from 'react-icons/fa';

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f9f9f9",
  },
  card: {
    borderRadius: "10px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  },
  cardHover: {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
  },
  filterSelect: {
    borderRadius: "10px",
    borderColor: "#007bff",
  },
  buttonGroup: {
    marginTop: "10px",
  },
  noProductsText: {
    marginTop: "20px",
    textAlign: "center",
  },
  customButton: {
    margin: "0 5px",
    borderRadius: "30px",
  },
};

const ProductCatalog = () => {
  const products = [
    { id: 1, name: 'PC Gamer A', price: 1200, category: 'PC Armadas', image: 'https://www.xtremepc.com.mx/cdn/shop/files/49f41db4-0e94-4b0c-bb3b-e4f3d39f0ba5_800x.png?v=1718379918', description: 'PC Gamer con las mejores especificaciones.' },
    { id: 2, name: 'Tarjeta Gráfica XYZ', price: 500, category: 'Componentes', image: 'https://www.xtremepc.com.mx/cdn/shop/files/49f41db4-0e94-4b0c-bb3b-e4f3d39f0ba5_800x.png?v=1718379918', description: 'Tarjeta gráfica de alto rendimiento.' },
    { id: 3, name: 'Procesador ABC', price: 300, category: 'Componentes', image: 'https://www.xtremepc.com.mx/cdn/shop/files/49f41db4-0e94-4b0c-bb3b-e4f3d39f0ba5_800x.png?v=1718379918', description: 'Procesador rápido y eficiente.' },
    { id: 4, name: 'Monitor HD', price: 250, category: 'Periféricos', image: 'https://www.xtremepc.com.mx/cdn/shop/files/49f41db4-0e94-4b0c-bb3b-e4f3d39f0ba5_800x.png?v=1718379918', description: 'Monitor con alta resolución.' },
    { id: 5, name: 'Teclado Mecánico', price: 150, category: 'Periféricos', image: 'https://www.xtremepc.com.mx/cdn/shop/files/49f41db4-0e94-4b0c-bb3b-e4f3d39f0ba5_800x.png?v=1718379918', description: 'Teclado mecánico duradero.' },
    { id: 6, name: 'Memoria RAM 16GB', price: 120, category: 'Componentes', image: 'https://www.xtremepc.com.mx/cdn/shop/files/49f41db4-0e94-4b0c-bb3b-e4f3d39f0ba5_800x.png?v=1718379918', description: 'Memoria RAM rápida y confiable.' },
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
    <Container style={styles.container}>
      <Row className="justify-content-center mb-3">
        <Col md={3}>
          <Form.Select onChange={handleCategoryChange} value={categoryFilter} aria-label="Filtrar por categoría" style={styles.filterSelect}>
            <option value="">Todas las categorías</option>
            {uniqueCategories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </Form.Select>
        </Col>
        <Col md={3}>
          <Form.Select onChange={handleSortChange} value={sortType} aria-label="Ordenar por" style={styles.filterSelect}>
            <option value="">Ordenar por...</option>
            <option value="price-lowest">Precio más bajo</option>
            <option value="price-highest">Precio más alto</option>
          </Form.Select>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredProducts.map(product => (
          <Col key={product.id}>
            <Card
              style={styles.card}
              className="shadow-lg"
              onMouseEnter={(e) =>
                (e.currentTarget.style = {
                  ...styles.card,
                  ...styles.cardHover,
                })
              }
              onMouseLeave={(e) => (e.currentTarget.style = styles.card)}
            >
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: '270px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="text-muted mb-2">{product.category}</Card.Text>
                <Card.Text className="mb-0 fw-bold">${product.price}</Card.Text>
                <div style={styles.buttonGroup}>
                  <Button variant="outline-primary" className="w-100 mb-2">
                    <FaInfoCircle /> Ver detalles
                  </Button>
                  <Button variant="outline-success" className="w-100 mb-2">
                    <FaShoppingCart /> Agregar al carrito
                  </Button>
                  <Button variant="primary" className="w-100">
                    <FaShoppingCart /> Comprar
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {filteredProducts.length === 0 && (
        <Row className="mt-4">
          <Col className="text-center">
            <p style={styles.noProductsText}>No hay productos disponibles.</p>
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
