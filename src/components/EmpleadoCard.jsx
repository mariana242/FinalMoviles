import React from 'react';

function EmpleadoCard({ empleado }) {
  return (
    <div className="EmpleadoCard">
      <img src={empleado.imagen} alt={empleado.nombre} className="card-image" />
      <div className="card-content">
        <h3>{empleado.nombre}</h3>
        <p>Documento: {empleado.documento}</p>
        <p>Correo: {empleado.correo}</p>
        <p>Cargo: {empleado.cargo}</p>
        <p>Salario: {empleado.salario}</p>
        <p>Dirección: {empleado.direccion}</p>
        <p>Número de Cuenta Bancaria: {empleado.cuentaBancaria}</p>
      </div>
    </div>
  );
}

export default EmpleadoCard;
