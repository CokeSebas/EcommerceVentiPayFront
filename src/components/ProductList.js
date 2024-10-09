import React, { useState, useEffect } from 'react';

const ProductList = ({ onProductClick }) => {
  const [products, setProducts] = useState([]); // Estado para almacenar productos
  const [loading, setLoading] = useState(true); // Estado para controlar la carga

  // useEffect para hacer la solicitud a la API
  useEffect(() => {
    // Reemplaza esta URL con la URL de tu API
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data); // Guardar los productos en el estado
        setLoading(false); // Desactivar el estado de carga
      })
      .catch(error => {
        console.error("Error fetching the products:", error);
        setLoading(false); // Desactivar la carga en caso de error
      });
  }, []); // El array vacío [] asegura que la solicitud se realice solo una vez cuando el componente se monta.

  // Mostrar un spinner o mensaje de carga mientras los datos se están cargando
  if (loading) {
    return <div>Cargando productos...</div>;
  }

  return (
    <ul className="list-group">
      {products.map((product) => (
        <li
          key={product.id}
          className="list-group-item list-group-item-action"
          onClick={() => onProductClick(product)}
          style={{ cursor: 'pointer' }}
        >
          <div className="d-flex justify-content-between">
            <span>{product.name}</span>
            <span>$ {product.price}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;