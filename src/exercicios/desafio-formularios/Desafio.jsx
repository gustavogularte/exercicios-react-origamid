import React from 'react';
import Radio from './Radio';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const Desafio = () => {
  const [respostas, setRespostas] = React.useState(
    perguntas.reduce((acc, pergunta) => {
      return { ...acc, [pergunta.id]: '' };
    }, {})
  );
  const [slide, setSlide] = React.useState(0);
  const [resultado, setResultado] = React.useState(null);

  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.className]: target.value });
  }

  function resultadoFinal() {
    const corretas = perguntas.filter(
      (pergunta) => pergunta.resposta === respostas[pergunta.id]
    );
    setResultado(`Você acertou ${corretas.length} de ${perguntas.length}`);
  }

  function handleClick() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      resultadoFinal();
    }
  }

  return (
    <article>
      <h1>Exercício 9 - Desafio formulários</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        {perguntas.map((pergunta, index) => (
          <Radio
            key={pergunta.id}
            active={index === slide}
            value={respostas[pergunta.id]}
            onChange={handleChange}
            {...pergunta}
          />
        ))}
        {resultado ? (
          <p>{resultado}</p>
        ) : (
          <button onClick={handleClick}>Próximo</button>
        )}
      </form>
    </article>
  );
};

export default Desafio;
