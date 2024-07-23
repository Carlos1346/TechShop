import React, { useState } from "react";
import { Container, Card, Row, Col, Toast } from "react-bootstrap";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "./ProductCard";

const Questionary = () => {
  const [step, setStep] = useState(0);
  const [presupuesto, setPresupuesto] = useState("");
  const [tamaño, setTamaño] = useState("");
  const [tipoUso, setTipoUso] = useState("");
  const [tarjetaGrafica, setTarjetaGrafica] = useState("");
  const [memoriaRAM, setMemoriaRAM] = useState("");
  const [discoDuro, setDiscoDuro] = useState("");
  const [programas, setProgramas] = useState("");
  const [usuarios, setUsuarios] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = () => {
    // Generar recomendaciones (esto es un ejemplo estático)
    const dummyRecommendations = [
      {
        name: "PC Gaming Avanzada",
        description: "Una poderosa PC gaming para juegos exigentes.",
        price: "20000",
        image: "https://via.placeholder.com/300",
      },
      {
        name: "PC de Oficina",
        description:
          "Una PC eficiente para trabajo de oficina y tareas diarias.",
        price: "10000",
        image: "https://via.placeholder.com/300",
      },
    ];

    setRecommendations(dummyRecommendations);
    setShowToast(true);
  };

  const steps = [
    {
      question: "1. Presupuesto",
      options: [
        {
          value: "<5000",
          label: "Menos de $5,000 MXN",
          image:
            "https://img.freepik.com/vector-gratis/monedas-oro-billetes-icono-estilo-dibujos-animados-3d-pila-monedas-signo-dolar-fajo-dinero-o-efectivo-ilustracion-vector-plano-ahorro-riqueza-economia-finanzas-ganancias-concepto-moneda_74855-25998.jpg",
        },
        {
          value: "5000-10000",
          label: "$5,000 - $10,000 MXN",
          image:
            "https://img.freepik.com/vector-gratis/monedas-oro-billetes-icono-estilo-dibujos-animados-3d-pila-monedas-signo-dolar-fajo-dinero-o-efectivo-ilustracion-vector-plano-ahorro-riqueza-economia-finanzas-ganancias-concepto-moneda_74855-25998.jpg?size=626&ext=jpg",
        },
        {
          value: "10000-15000",
          label: "$10,000 - $15,000 MXN",
          image:
            "https://img.freepik.com/vector-gratis/monedas-oro-billetes-icono-estilo-dibujos-animados-3d-pila-monedas-signo-dolar-fajo-dinero-o-efectivo-ilustracion-vector-plano-ahorro-riqueza-economia-finanzas-ganancias-concepto-moneda_74855-25998.jpg?size=626&ext=jpg",
        },
        {
          value: "15000-20000",
          label: "$15,000 - $20,000 MXN",
          image:
            "https://img.freepik.com/vector-gratis/monedas-oro-billetes-icono-estilo-dibujos-animados-3d-pila-monedas-signo-dolar-fajo-dinero-o-efectivo-ilustracion-vector-plano-ahorro-riqueza-economia-finanzas-ganancias-concepto-moneda_74855-25998.jpg?size=626&ext=jpg",
        },
        {
          value: ">20000",
          label: "Más de $20,000 MXN",
          image:
            "https://img.freepik.com/vector-gratis/monedas-oro-billetes-icono-estilo-dibujos-animados-3d-pila-monedas-signo-dolar-fajo-dinero-o-efectivo-ilustracion-vector-plano-ahorro-riqueza-economia-finanzas-ganancias-concepto-moneda_74855-25998.jpg?size=626&ext=jpg",
        },
      ],
      stateSetter: setPresupuesto,
      currentState: presupuesto,
    },
    {
      question: "2. Tamaño",
      options: [
        {
          value: "compacta",
          label: "Compacta",
          image:
            "https://http2.mlstatic.com/D_NQ_NP_881224-MLM52299378116_112022-O.webp",
        },
        {
          value: "mediana",
          label: "Mediana",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj-NlDOTSi21FZ-ZpzNv5TAhPXVhK5wLFEqg&s",
        },
        {
          value: "grande",
          label: "Grande",
          image:
            "https://hardzone.es/app/uploads-hardzone.es/2018/05/corsair-obsidian-1000D.jpg?x=480&y=375&quality=40",
        },
      ],
      stateSetter: setTamaño,
      currentState: tamaño,
    },
    {
      question: "3. Tipo de Uso",
      options: [
        {
          value: "uso_estandar",
          label: "Uso Estándar",
          image:
            "https://learn.microsoft.com/es-es/windows-hardware/design/images/desktop.png",
        },
        {
          value: "gaming",
          label: "Gaming",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcXzTKSa2WCzaD1baplzpvDezDMq7h6XSChg&s",
        },
        {
          value: "trabajo_oficina",
          label: "Trabajo de Oficina",
          image:
            "https://http2.mlstatic.com/D_NQ_NP_620021-MLA75004847629_032024-O.webp",
        },
        {
          value: "educacion",
          label: "Educación",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRIVdqkV6NRcfWXwVWrzdkZ_JR8SizYwiqlg&s",
        },
        {
          value: "uso_especializado",
          label: "Uso Especializado",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg6GM063tdSS4DNk5y-7IP6E8bVj1p8_yqeQ&s",
        },
      ],
      stateSetter: setTipoUso,
      currentState: tipoUso,
    },
    {
      question: "4. Tarjeta Gráfica",
      options: [
        {
          value: "basica",
          label: "Básica",
          image: "https://via.placeholder.com/80",
        },
        {
          value: "media",
          label: "Media",
          image: "https://via.placeholder.com/80",
        },
        {
          value: "alta",
          label: "Alta",
          image: "https://via.placeholder.com/80",
        },
      ],
      stateSetter: setTarjetaGrafica,
      currentState: tarjetaGrafica,
    },
    {
      question: "5. Memoria RAM",
      options: [
        {
          value: "8GB",
          label: "8 GB",
          image: "https://via.placeholder.com/80",
        },
        {
          value: "16GB",
          label: "16 GB",
          image: "https://via.placeholder.com/80",
        },
        {
          value: "32GB",
          label: "32 GB",
          image: "https://via.placeholder.com/80",
        },
      ],
      stateSetter: setMemoriaRAM,
      currentState: memoriaRAM,
    },
    {
      question: "6. Disco Duro",
      options: [
        { value: "HDD", label: "HDD", image: "https://via.placeholder.com/80" },
        { value: "SSD", label: "SSD", image: "https://via.placeholder.com/80" },
        {
          value: "HDD+SSD",
          label: "HDD+SSD",
          image: "https://via.placeholder.com/80",
        },
      ],
      stateSetter: setDiscoDuro,
      currentState: discoDuro,
    },
    {
      question: "7. Programas y Aplicaciones",
      options: [
        {
          value: "oficina",
          label: "Oficina",
          image: "https://via.placeholder.com/80",
        },
        {
          value: "diseño",
          label: "Diseño",
          image: "https://via.placeholder.com/80",
        },
        {
          value: "desarrollo",
          label: "Desarrollo",
          image: "https://via.placeholder.com/80",
        },
      ],
      stateSetter: setProgramas,
      currentState: programas,
    },
    {
      question: "8. Usuarios",
      options: [
        {
          value: "solo_yo",
          label: "Solo por mí",
          image: "https://via.placeholder.com/80",
        },
        {
          value: "varias_personas",
          label: "Por varias personas",
          image: "https://via.placeholder.com/80",
        },
      ],
      stateSetter: setUsuarios,
      currentState: usuarios,
    },
  ];

  const handleOptionSelect = (value, setter) => {
    setter(value);
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header as="h5">
          Cuestionario para determinar características de la computadora
        </Card.Header>
        <Card.Body>
          <motion.div
            key={step}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <h6>{steps[step].question}</h6>
            <Row className="g-2">
              {steps[step].options.map((option, index) => (
                <Col md={4} key={index}>
                  <Card
                    border={
                      steps[step].currentState === option.value
                        ? "primary"
                        : "light"
                    }
                    className="cursor-pointer"
                    style={{ width: "100%", margin: "0 auto" }}
                    onClick={() =>
                      handleOptionSelect(option.value, steps[step].stateSetter)
                    }
                  >
                    <Card.Img
                      variant="top"
                      src={option.image}
                      style={{
                        height: "250px", // Ajusta según sea necesario
                        width: "100%",
                      }}
                    />
                    <Card.Body>
                      <Card.Title>{option.label}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Card.Body>
      </Card>

      {showToast && (
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
          className="mt-3"
        >
          <Toast.Body>¡Aquí están tus recomendaciones!</Toast.Body>
        </Toast>
      )}

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
