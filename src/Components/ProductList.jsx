import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard'; // Importa el componente de tarjeta de producto

const products = [
  {
    name: 'PC Gamer Xtreme',
    description: 'Una potente PC para gaming con gráficos de alta calidad.',
    price: 1500,
    image: 'https://www.xtremepc.com.mx/cdn/shop/files/49f41db4-0e94-4b0c-bb3b-e4f3d39f0ba5_800x.png?v=1718379918'
  },
  {
    name: 'Procesador Intel Core i9',
    description: 'El procesador más reciente de Intel para rendimiento extremo.',
    price: 500,
    image: 'https://m.media-amazon.com/images/I/61ufrInXMuL._AC_UF894,1000_QL80_.jpg'
  },
  {
    name: 'Tarjeta Gráfica NVIDIA RTX 3080',
    description: 'Gráficos de última generación para los juegos más exigentes.',
    price: 800,
    image: 'https://m.media-amazon.com/images/I/71UStULnUyS._AC_UF894,1000_QL80_.jpg'
  },
  {
    name: 'Memoria RAM 32GB DDR4',
    description: 'Aumenta el rendimiento de tu PC con esta memoria de alta velocidad.',
    price: 150,
    image: 'https://ss628.liverpool.com.mx/xl/1108985051.jpg'
  },
  {
    name: 'Disco Duro SSD 1TB',
    description: 'Almacenamiento rápido y fiable para todos tus archivos.',
    price: 200,
    image: 'https://http2.mlstatic.com/D_NQ_NP_828891-MLU70031856125_062023-O.webp'
  },

  {
    name: 'Disco Duro SSD 2TB',
    description: 'Almacenamiento rápido y fiable para todos tus archivos.',
    price: 200,
    image: 'https://www.lacasadelascomputadoras.com.mx/productos/m/1703616600-11.jpg'
  }


];

const ProductList = () => {
  return (
    <Container style={{ marginTop: "30px" }} >
      <h3>Nuestros Productos mas relevantes</h3>
      <Row>
      
        {products.map((product, index) => (
          <Col key={index} sm={12} md={6} lg={4}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
