import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import CheckoutPage from './components/CheckoutPage'; 
import PaymentSuccessPage from './components/PagoExitoso';
import PaymentFailedPage from './components/PagoRechazado';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 bg-light">
            <h3 className="mt-3">Lista de Productos</h3>
            <ProductList onProductClick={handleProductClick} />
          </div>
          
          <div className="col-md-8">
            <Routes>
              <Route 
                path="/" 
                element={selectedProduct ? (
                  <ProductDetails product={selectedProduct} />
                ) : (
                  <div className="text-center mt-5">
                    <h4>Seleccione un producto</h4>
                  </div>
                )}
              />
              <Route path="/checkout" element={<CheckoutPage product={selectedProduct} />} />
      
              <Route path="/pago-exitoso/:amount/:currency" element={<PaymentSuccessPage />} />

              <Route path="/pago-rechazado" element={<PaymentFailedPage/>} />
      
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
