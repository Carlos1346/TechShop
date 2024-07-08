import React, { useState } from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const Questionary = () => {
    const [presupuesto, setPresupuesto] = useState('');
    const [tamaño, setTamaño] = useState('');
    const [tipoUso, setTipoUso] = useState('');
    const [tarjetaGrafica, setTarjetaGrafica] = useState('');
    const [memoriaRAM, setMemoriaRAM] = useState('');
    const [discoDuro, setDiscoDuro] = useState('');
    const [programas, setProgramas] = useState('');
    const [usuarios, setUsuarios] = useState('');
    const [recommendations, setRecommendations] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            presupuesto,
            tamaño,
            tipoUso,
            tarjetaGrafica,
            memoriaRAM,
            discoDuro,
            programas,
            usuarios
        });
        
        // Generar recomendaciones (esto es un ejemplo estático)
        const dummyRecommendations = [
            {
                name: 'PC Gaming Avanzada',
                description: 'Una poderosa PC gaming para juegos exigentes.',
                price: '20000',
                image: 'https://via.placeholder.com/300'
            },
            {
                name: 'PC de Oficina',
                description: 'Una PC eficiente para trabajo de oficina y tareas diarias.',
                price: '10000',
                image: 'https://via.placeholder.com/300'
            }
            // Agrega más productos según sea necesario
        ];

        setRecommendations(dummyRecommendations);
    };

    return (
        <Container className="mt-4">
            <Card>
                <Card.Header as="h5">Cuestionario para determinar características de la computadora</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        {/* Pregunta 1: Presupuesto */}
                        <Form.Group controlId="formPresupuesto">
                            <Form.Label>1. Presupuesto</Form.Label>
                            <Form.Control as="select" onChange={(e) => setPresupuesto(e.target.value)} value={presupuesto}>
                                <option value="">Selecciona tu presupuesto aproximado</option>
                                <option value="<5000">Menos de $5,000 MXN</option>
                                <option value="5000-10000">$5,000 - $10,000 MXN</option>
                                <option value="10000-15000">$10,000 - $15,000 MXN</option>
                                <option value="15000-20000">$15,000 - $20,000 MXN</option>
                                <option value=">20000">Más de $20,000 MXN</option>
                            </Form.Control>
                        </Form.Group>

                        {/* Pregunta 2: Tamaño */}
                        <Form.Group controlId="formTamaño">
                            <Form.Label>2. Tamaño</Form.Label>
                            <Form.Control as="select" onChange={(e) => setTamaño(e.target.value)} value={tamaño}>
                                <option value="">Selecciona el tamaño deseado</option>
                                <option value="compacta">Compacta</option>
                                <option value="mediana">Mediana</option>
                                <option value="grande">Grande</option>
                            </Form.Control>
                        </Form.Group>

                        {/* Pregunta 3: Tipo de Uso */}
                        <Form.Group controlId="formTipoUso">
                            <Form.Label>3. Tipo de Uso</Form.Label>
                            <Form.Control as="select" onChange={(e) => setTipoUso(e.target.value)} value={tipoUso}>
                                <option value="">Selecciona el tipo de uso principal</option>
                                <option value="uso_estandar">Uso Estándar</option>
                                <option value="gaming">Gaming</option>
                                <option value="trabajo_oficina">Trabajo de Oficina</option>
                                <option value="educacion">Educación</option>
                                <option value="uso_especializado">Uso Especializado</option>
                            </Form.Control>
                        </Form.Group>

                        {/* Pregunta 4: Tarjeta Gráfica */}
                        <Form.Group controlId="formTarjetaGrafica">
                            <Form.Label>4. Tarjeta Gráfica</Form.Label>
                            <Form.Control as="select" onChange={(e) => setTarjetaGrafica(e.target.value)} value={tarjetaGrafica}>
                                <option value="">Selecciona el tipo de tarjeta gráfica deseado</option>
                                <option value="basica">Básica</option>
                                {/* Aquí podrías agregar más opciones según sea necesario */}
                            </Form.Control>
                        </Form.Group>

                        {/* Pregunta 5: Memoria RAM */}
                        <Form.Group controlId="formMemoriaRAM">
                            <Form.Label>5. Memoria RAM</Form.Label>
                            <Form.Control as="select" onChange={(e) => setMemoriaRAM(e.target.value)} value={memoriaRAM}>
                                <option value="">Selecciona la cantidad de memoria RAM deseada</option>
                                {/* Opciones para la memoria RAM */}
                            </Form.Control>
                        </Form.Group>

                        {/* Pregunta 6: Disco Duro */}
                        <Form.Group controlId="formDiscoDuro">
                            <Form.Label>6. Disco Duro</Form.Label>
                            <Form.Control as="select" onChange={(e) => setDiscoDuro(e.target.value)} value={discoDuro}>
                                <option value="">Selecciona el tipo de almacenamiento deseado</option>
                                {/* Opciones para el tipo de disco duro */}
                            </Form.Control>
                        </Form.Group>

                        {/* Pregunta 7: Programas y Aplicaciones */}
                        <Form.Group controlId="formProgramas">
                            <Form.Label>7. Programas y Aplicaciones</Form.Label>
                            <Form.Control as="select" onChange={(e) => setProgramas(e.target.value)} value={programas}>
                                <option value="">Selecciona los programas y aplicaciones principales</option>
                                {/* Opciones para los programas y aplicaciones */}
                            </Form.Control>
                        </Form.Group>

                        {/* Pregunta 8: Usuarios */}
                        <Form.Group controlId="formUsuarios">
                            <Form.Label>8. Usuarios</Form.Label>
                            <Form.Control as="select" onChange={(e) => setUsuarios(e.target.value)} value={usuarios}>
                                <option value="">Selecciona la cantidad de usuarios que utilizarán la computadora</option>
                                <option value="solo_yo">Solo por mí</option>
                                <option value="varias_personas">Por varias personas</option>
                            </Form.Control>
                        </Form.Group>

                        {/* Botón de envío */}
                        <Button variant="primary" type="submit">
                            Obten tu mejor opcion!
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            
            {recommendations.length > 0 && (
                <Row className="mt-4">
                    {recommendations.map((product, index) => (
                        <Col md={4} key={index}>
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default Questionary;
