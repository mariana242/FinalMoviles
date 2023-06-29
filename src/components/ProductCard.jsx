import React from 'react';

function ProductCard({ product }) {
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.quantity}</td>
      <td>{product.value}</td>
      <td>{product.description}</td>
      <td>
        <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px' }} />
      </td>
      <td>{product.category}</td>
    </tr>
  );
}

export default ProductCard;

