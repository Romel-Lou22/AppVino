import React from 'react';
import './App.css'; // Importa un archivo CSS para estilos

function App() {
  // Datos ficticios de los vinos disponibles
  const vinos = [
    { id: 1, nombre: 'Vino Tinto Reserva', precio: '$15.00', descripcion: 'Un vino tinto robusto con notas de frutas rojas.' },
    { id: 2, nombre: 'Vino Blanco Dulce', precio: '$12.00', descripcion: 'Un vino blanco ligero y dulce, perfecto para postres.' },
    { id: 3, nombre: 'Vino Rosado Joven', precio: '$10.00', descripcion: 'Un vino rosado fresco con un toque afrutado.' },
  ];

  return (
    <div className="App">
      {/* Encabezado */}
      <header className="App-header">
        <h1>🍷 El Viejo Medieval 🍷</h1>
        <p>Tu destino para los mejores vinos artesanales.</p>
      </header>

      {/* Lista de vinos */}
      <main className="App-main">
        <h2>Nuestros Vinos</h2>
        <div className="vinos-container">
          {vinos.map((vino) => (
            <div key={vino.id} className="vino-card">
              <h3>{vino.nombre}</h3>
              <p>{vino.descripcion}</p>
              <p><strong>Precio:</strong> {vino.precio}</p>
              <button className="comprar-btn">Comprar</button>
            </div>
          ))}
        </div>
      </main>

      {/* Pie de página */}
      <footer className="App-footer">
        <p>&copy; 2023 El Viejo Medieval. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;