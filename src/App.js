import React, { useState } from 'react';
import './App.css';

const Counter = () => {
  const [count, setCount] = useState(0); 

  // Función para aumentar el contador
  const increment = () => {
    setCount(count + 1);
  };

  // Función para diminuir el contador
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Función para reiniciar el contador
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={reset}>Reiniciar</button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default App;
