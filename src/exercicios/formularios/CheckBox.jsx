import React from 'react';

const CheckBox = () => {
  // Otimize o código do slide anterior
  // Utilizando a array abaixo para mostrar
  // cada checkbox na tela.

  const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  return (
    <article>
      <h1>Exercício 8 - checkbox</h1>
      {coresArray.map((cor) => (
        <label key={cor}>
          <input type="checkbox" value={cor} onChange={handleChange} />
          {cor}
        </label>
      ))}
    </article>
  );
};

export default CheckBox;
