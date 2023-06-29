import React, { useEffect, useState } from 'react';
import ContraseñaCard from './ContraseñaCard';

function ContraseñaList() {
  const [contraseñas, setContraseñas] = useState([]);

  useEffect(() => {
    // Simulación de carga de datos en tiempo real
    const fetchContraseñas = async () => {
      // Aquí puedes realizar una llamada a una API o base de datos para obtener las contraseñas
      // En este caso, simplemente vamos a simular los datos con un delay de 1 segundo
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Datos de contraseñas
      const fetchedContraseñas = [
        {
          id: 1,
          nombre: 'Facebook',
          imageUrl: 'https://example.com/facebook.jpg',
          contraseña: '********',
          usuario: 'usuario1',
        },
        {
          id: 2,
          nombre: 'Google',
          imageUrl: 'https://example.com/google.jpg',
          contraseña: '********',
          usuario: 'usuario2',
        },
        {
          id: 3,
          nombre: 'Amazon',
          imageUrl: 'https://example.com/amazon.jpg',
          contraseña: '********',
          usuario: 'usuario3',
        },
        {
          id: 4,
          nombre: 'Twitter',
          imageUrl: 'https://example.com/twitter.jpg',
          contraseña: '********',
          usuario: 'usuario4',
        },
        {
          id: 5,
          nombre: 'LinkedIn',
          imageUrl: 'https://example.com/linkedin.jpg',
          contraseña: '********',
          usuario: 'usuario5',
        },
      ];

      setContraseñas(fetchedContraseñas);
    };

    fetchContraseñas();
  }, []);

  return (
    <div className="ContraseñaList">
      <h2>Lista de Contraseñas</h2>
      <div className="cards">
        {contraseñas.map((contraseña) => (
          <ContraseñaCard key={contraseña.id} contraseña={contraseña} />
        ))}
      </div>
    </div>
  );
}

export default ContraseñaList;
