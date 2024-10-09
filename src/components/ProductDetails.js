import React from 'react';
import { Card, Button } from 'react-bootstrap'; 
import { useNavigate } from 'react-router-dom'; 

const ProductDetails = ({ product }) => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate('/checkout');
  };

  return (
    <Card className="mt-3">
      <Card.Img 
        variant="top" 
        src={`http://localhost:5000${product.image	}`} 
        style={{ width: '30%', height: 'auto' }} 
      /> 
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <h5>$ {product.price}</h5>

        <Button variant="primary" onClick={handleBuyNow}>
          Comprar ahora
        </Button>

      </Card.Body>
    </Card>
  );
};

export default ProductDetails;
