import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselComponent = () => {
  return (
    <Carousel fade >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/736x/fd/ea/b0/fdeab08c1d6f41bad0562b036a57af4f.jpg"
          alt="Oferta 1"
          style={{ height: '400px', objectFit: 'cover' }} // Ajustamos la altura y el ajuste del objeto
        />
        <Carousel.Caption>
          <h1>Oferta Especial</h1>
          <p>Aprovecha nuestras ofertas exclusivas.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.arsys.es/blog/wp-content/uploads/2019/06/imagenes-blog-junio-2019-servidores.jpg"
          alt="Oferta 2"
          style={{ height: '400px', objectFit: 'cover' }} // Ajustamos la altura y el ajuste del objeto
        />
        <Carousel.Caption>
          <h1>Nuevos Productos</h1>
          <p>Descubre nuestros últimos lanzamientos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.tutellus.com/libraries/45/18/61/lib/1524638438902_2.jpg?size=854x493s&ext=jpg"
          alt="Oferta 3"
          style={{ height: '400px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h1>Promoción Especial</h1>
          <p>No te pierdas esta promoción limitada.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
