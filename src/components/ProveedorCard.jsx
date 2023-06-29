import React from 'react';

function ProveedorCard({ proveedor }) {
  return (
    <tr>
      <td>{proveedor.nombre}</td>
      <td>{proveedor.direccion}</td>
      <td>{proveedor.ciudad}</td>
      <td>{proveedor.nit}</td>
      <td>{proveedor.telefono}</td>
      <td>{proveedor.gerente}</td>
      <td>
        <img src={proveedor.imagenGerente} alt={proveedor.gerente} style={{ width: '100px', height: '100px' }} />
      </td>
      <td>
        <img src={proveedor.logoEmpresa} alt={proveedor.nombre} style={{ width: '100px', height: '100px' }} />
      </td>
    </tr>
  );
}

export default ProveedorCard;

