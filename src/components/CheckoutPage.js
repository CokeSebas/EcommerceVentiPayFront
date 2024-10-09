import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap'; 
import axios from 'axios';


const CheckoutPage = ({ product }) => {

  let paymentUrl = "";

  const [isLoading, setIsLoading] = useState(false);
  const handleCheckout = async () => {
    //alert('comenzar proceso pago');

    try {

      const object = {
        item :product,
      };

      setIsLoading(true);

      const response = await axios.post('http://localhost:5000/api/checkout', object);
      console.log('Respuesta del servidor:', response.data);

      paymentUrl = 'https://ventipay.com/pay/' + response.data;

      //handleShow();

      //window.open = 'https://ventipay.com/pay/' + response.data;
      window.location.href = paymentUrl;

      //success_url

      setTimeout(() => {
          setIsLoading(false);
      }, 2000);
      
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }

  };

  if (!product) {
    return (
      <div className="text-center mt-5">
        <h4>No hay ningún producto seleccionado</h4>
      </div>
    );
  }

  return (

    <div className="container mt-5">
      
      <div className="row">
        <div className="col-md-6">
          <div className="checkout-page">
            <h3>Checkout</h3>
            <p>Estás comprando: <strong>{product.name}</strong></p>
            <p>Precio: $ <strong>{product.price}</strong></p>
            <Card.Img 
              variant="top" 
              src={`http://localhost:5000${product.image}`} 
              style={{ width: '40%', height: 'auto' }} 
            />
          </div>


          <Button variant="primary" onClick={handleCheckout}>
            Ir a Pagar
          </Button>


        </div>

        
      </div>

    </div>
  );
};

export default CheckoutPage;
