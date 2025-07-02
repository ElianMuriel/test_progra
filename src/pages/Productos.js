import './Productos.css';

function Productos() {
  const productos = [
    { id: 1, nombre: 'Producto A', precio: 50, stock: 10 },
    { id: 2, nombre: 'Producto B', precio: 80, stock: 5 },
  ];

  return (
    <div className="productos-wrapper">
      <h2 className="titulo">Listado de Productos</h2>
      <table className="tabla-productos">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nombre}</td>
              <td>{p.precio}</td>
              <td>{p.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Productos;
