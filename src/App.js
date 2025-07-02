import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Productos from './pages/Productos';
import NuevoProducto from './pages/NuevoProducto';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="container">
            <span className="navbar-brand">Gestión de Productos</span>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/productos">Productos</Link></li>
              <li><Link to="/nuevo">Nuevo Producto</Link></li>
              <li><a href="#">Cálculos</a></li>
              <li><a href="#">Información</a></li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/nuevo" element={<NuevoProducto />} />
        </Routes>

        <footer>
          © 2025 - Sistema de Productos - Taller Académico
        </footer>
      </div>
    </Router>
  );
}

export default App;
