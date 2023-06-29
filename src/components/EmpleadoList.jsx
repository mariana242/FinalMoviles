import React, { useEffect, useState } from 'react';
import EmpleadoCard from './EmpleadoCard';

function EmpleadoList() {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    // Simulación de carga de datos en tiempo real
    const fetchEmpleados = async () => {
      // Aquí puedes realizar una llamada a una API o base de datos para obtener los empleados
      // En este caso, simplemente vamos a simular los datos con un delay de 1 segundo
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Datos de empleados
      const fetchedEmpleados = [
        {
          id: 1,
          nombre: 'Juan Pérez',
          documento: '123456789',
          correo: 'juan.perez@example.com',
          cargo: 'Gerente',
          salario: 5000,
          direccion: 'Calle 123',
          cuentaBancaria: '987654321',
          imagen: 'https://example.com/imagen-empleado1.jpg',
        },
        {
          id: 2,
          nombre: 'María Gómez',
          documento: '987654321',
          correo: 'maria.gomez@example.com',
          cargo: 'Analista',
          salario: 3000,
          direccion: 'Carrera 456',
          cuentaBancaria: '123456789',
          imagen: 'https://example.com/imagen-empleado2.jpg',
        },
        {
          id: 3,
          nombre: 'Carlos Rodríguez',
          documento: '456789123',
          correo: 'carlos.rodriguez@example.com',
          cargo: 'Desarrollador',
          salario: 4000,
          direccion: 'Avenida 789',
          cuentaBancaria: '654321987',
          imagen: 'https://example.com/imagen-empleado3.jpg',
        },
        {
          id: 4,
          nombre: 'Ana López',
          documento: '789123456',
          correo: 'ana.lopez@example.com',
          cargo: 'Diseñadora',
          salario: 3500,
          direccion: 'Plaza 012',
          cuentaBancaria: '321987654',
          imagen: 'https://example.com/imagen-empleado4.jpg',
        },
        {
          id: 5,
          nombre: 'Pedro Martínez',
          documento: '321654987',
          correo: 'pedro.martinez@example.com',
          cargo: 'Contador',
          salario: 4500,
          direccion: 'Camino 345',
          cuentaBancaria: '789456123',
          imagen: 'https://example.com/imagen-empleado5.jpg',
        },
      ];

      setEmpleados(fetchedEmpleados);
    };

    fetchEmpleados();
  }, []);

  return (
    <div className="EmpleadoList">
      <h2>Lista de Empleados</h2>
      <div className="cards">
        {empleados.map((empleado) => (
          <EmpleadoCard key={empleado.id} empleado={empleado} />
        ))}
      </div>
    </div>
  );
}

export default EmpleadoList;
