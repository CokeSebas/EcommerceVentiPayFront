// src/pages/ShopPage.js
import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/ProductService';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';

const ShopPage = () => {
  const [products, setProducts] = useState([]); // Estado para almacenar los productos
  const [loading, setLoading] = useState(true); // Estado para gestionar la carga
  //const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data); // Establece los productos en el estado
      } catch (error) {
        console.error('Error al cargar los productos:', error);
      } finally {
        setLoading(false); // Termina la carga independientemente de si hubo error o no
      }
    };

    fetchProducts();
  }, []); // El arreglo vacío significa que solo se ejecutará una vez cuando se monte el componente

  if (loading) {
    return <div>Cargando productos...</div>; // Muestra un mensaje de carga mientras se obtienen los productos
  }

  return (
    <div>
      <h1>Tienda</h1>
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div>No hay productos disponibles.</div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
