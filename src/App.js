import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="container">
          <span className="navbar-brand">Gestión de Productos</span>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Nuevo Producto</a></li>
            <li><a href="#">Cálculos</a></li>
            <li><a href="#">Información</a></li>
          </ul>
        </div>
      </nav>

      <header className="hero">
        <h1>Bienvenido a la Gestión de Inventario</h1>
        <p>Consulta, registra y realiza cálculos sobre los productos del inventario.</p>
      </header>

      <main className="main-container">
        <div className="card">
          <h2>Listado de Productos</h2>
          <p>Consulta el inventario actual.</p>
        </div>
        <div className="card">
          <h2>Registrar Producto</h2>
          <p>Agrega nuevos productos.</p>
        </div>
        <div className="card">
          <h2>Cálculos de Inventario</h2>
          <p>Calcula valores comerciales básicos.</p>
        </div>
      </main>

      <div className="alert">
        Recuerda: Mantén actualizado el stock de productos.
      </div>

      <footer>
        © 2025 - Sistema de Productos - Taller Académico
      </footer>
    </div>
  );
}

export default App;
