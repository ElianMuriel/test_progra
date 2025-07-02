import { useState } from 'react';
import './NuevoProducto.css';

function NuevoProducto() {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación simple
    if (!nombre || !precio || !stock) {
      setMensaje('Por favor llena todos los campos.');
      return;
    }

    // Aquí podrías guardar el producto en una base de datos o estado global
    console.log('Producto guardado:', { nombre, precio, stock });

    setMensaje('✅ Producto guardado exitosamente.');

    // Limpiar formulario
    setNombre('');
    setPrecio('');
    setStock('');
  };

  return (
    <div className="nuevo-producto-container">
      <h2>Registrar Nuevo Producto</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label>Precio:</label>
        <input
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />

        <label>Stock:</label>
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />

        <button type="submit">Guardar Producto</button>

        {mensaje && <p className="mensaje">{mensaje}</p>}
      </form>
    </div>
  );
}

export default NuevoProducto;
