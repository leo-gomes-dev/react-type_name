import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [nomeDigitado, setNomeDigitado] = useState('');

  function handleNome(e) {
    e.preventDefault();
    if (!name.trim()) return;
    setNomeDigitado(name);
    setName('');
  }

  return (
    <div className="container">
      <h1>Digite o Nome</h1>

      <form onSubmit={handleNome} className="form-box">
        <input
          type="text"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />
        <button type="submit" className="btn-submit">
          Enviar
        </button>
      </form>
      {name && (
        <span className="result-text">
          Digitando: <strong>{name}</strong>
        </span>
      )}

      {nomeDigitado && <h3>Último nome digitado: {nomeDigitado}</h3>}
    </div>
  );
}

export default App;
