import React from 'react';

function ClientCard({ client }) {
  return (
    <div className="ClientCard">
      <img src={client.image} alt={client.name} />
      <h3>{client.name}</h3>
      <p>Documento: {client.document}</p>
      <p>Correo: {client.email}</p>
      <p>Teléfono: {client.phone}</p>
      <p>Dirección: {client.address}</p>
      <p>Barrio: {client.neighborhood}</p>
      <p>Ciudad: {client.city}</p>
    </div>
  );
}

export default ClientCard;
