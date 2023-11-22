import React from 'react';
import Home from './Home';
import Produtos from './Produtos';

const App = () => {
  // Replique a interface como a apresentada na aula
  // Utilize a array abaixo para mostrar os produtos
  // Quebre em componentes o que precisar ser reutilizado
  // Dica: const { pathname } = window.location; (puxa o caminho do URL)
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];
  const { pathname } = window.location;

  return (
    <article>
      <h1>Exercício 3 - Desafio componentes</h1>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/produtos">Produtos</a>
        </li>
      </ul>
      {pathname === '/produtos' ? <Produtos produtos={produtos} /> : <Home />}
    </article>
  );
};

export default App;
