import React from 'react';

function ContraseñaCard({ contraseña }) {
  return (
    <div className="card">
      <img src={contraseña.imageUrl} alt={contraseña.nombre} />
      <h3>{contraseña.nombre}</h3>
      <p>Usuario: {contraseña.usuario}</p>
      <p>Contraseña: {contraseña.contraseña}</p>
    </div>
  );
}

export default ContraseñaCard;
