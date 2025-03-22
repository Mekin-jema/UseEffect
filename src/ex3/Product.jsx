import React, { useState, useEffect } from 'react';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  async function fetchData() {
    // You can await here
   const data=await fetch('https://fakestoreapi.com/products')
   const response=await data.json()
    setProducts(response)
    // ...
  }
  fetchData();
}, []); // Or [] if effect doesn't need props or state

  if (loading) return <p>Loading products...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h1>🛍️ Shop Products</h1>
      {products.map((product) => (
        <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <h3>{product.title}</h3>
          <img src={product.image} alt={product.title} style={{ width: '100px' }} />
          <p>Price: ${product.price}</p>
          <p>{product.description.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
