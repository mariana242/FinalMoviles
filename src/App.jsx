import React from 'react';
import ClientList from './components/ClientList';
import ProductList from './components/ProductList';
import ProveedorList from './components/ProveedorList';
import EmpleadoList from './components/EmpleadoList';
import ContraseñaList from './components/ContraseñaList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Registro de Clientes</h1>
      <ClientList />
      <h1>Lista de Productos</h1>
      <ProductList />
      <h1>Lista de Proveedores</h1>
      <ProveedorList />
      <h1>Lista de Empleados</h1>
      <EmpleadoList />
      <h1>Bóveda de Contraseñas</h1>
      <ContraseñaList />
    </div>
  );
}

export default App;




