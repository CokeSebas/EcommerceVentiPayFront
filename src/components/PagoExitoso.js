import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

const PaymentSuccessPage = () => {
  const { amount, currency } = useParams();
  return (
    <Container className="mt-5">
      <Row>
        <Col md={8}>
          <h3>Pago Completado Correctamente</h3>

          <p>Has pagado: <strong>$ {amount}</strong> {currency.toUpperCase()}</p>
          
          <p>Gracias por tu compra. Tu transacción se ha procesado con éxito.</p>
         
          <Button variant="primary" as={Link} to="/">
            Regresar al inicio
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentSuccessPage;
