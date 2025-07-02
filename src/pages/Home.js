function Home() {
  return (
    <>
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
    </>
  );
}

export default Home;
