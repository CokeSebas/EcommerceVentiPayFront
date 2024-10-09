import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PaymentSuccessPage = ({ product }) => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={8}>
          <h3>Pago Rechazado</h3>
          <p>Lamentablemente, no hemos podido procesar tu pago. Inténtalo nuevamente o contacta a tu proveedor de pago.</p>
          
          <Button variant="danger" as={Link} to="/checkout">
            Intentar de nuevo
          </Button>
          
          <Button variant="secondary" as={Link} to="/" className="ml-3">
            Regresar al inicio
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentSuccessPage;
