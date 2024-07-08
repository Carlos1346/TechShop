import React from 'react';
import { Card, Badge } from 'react-bootstrap';

const Reviews = () => {
  
  const reviews = [
    { id: 1, user: 'Usuario1', rating: 4, comment: 'Buena calidad, rápido envío.' },
    { id: 2, user: 'Usuario2', rating: 5, comment: 'Excelente servicio al cliente.' },
    { id: 3, user: 'Usuario3', rating: 3, comment: 'Producto aceptable pero entrega tardía.' },
    { id: 4, user: 'Usuario4', rating: 5, comment: 'Muy satisfecho con mi compra, recomendado.' },
    { id: 5, user: 'Usuario5', rating: 4, comment: 'Buena atención al cliente, resolvieron mis dudas.' },
    { id: 6, user: 'Usuario6', rating: 3, comment: 'Entrega demorada pero producto en buen estado.' },
    { id: 7, user: 'Usuario7', rating: 5, comment: '¡Increíble servicio al cliente! Lo recomendaré.' },
    { id: 8, user: 'Usuario8', rating: 4, comment: 'Buena experiencia de compra, todo en orden.' },
    { id: 9, user: 'Usuario9', rating: 4, comment: 'El producto cumple con mis expectativas.' },
    { id: 10, user: 'Usuario10', rating: 2, comment: 'No recibí mi producto a tiempo, decepcionado.' },
    
  ];

  return (
    <div>
      <h2 className="text-center mb-4 fw-bold text-uppercase">Reseñas de Clientes</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {reviews.map(review => (
          <div key={review.id} className="col">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body>
                <Card.Title className="d-flex justify-content-between align-items-center">
                  <span>{review.user}</span>
                  <Badge bg="primary"></Badge>
                </Card.Title>
                <Card.Text>{review.comment}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;