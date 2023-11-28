import React from 'react';
import Radio from './Radio';

const Desafio = () => {
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

  const [respostas, setRespostas] = React.useState(
    perguntas.reduce((acc, pergunta) => {
      return { ...acc, [pergunta.id]: '' };
    }, {})
  );
  const [slide, setSlide] = React.useState(0);
  const [acertos, setAcertos] = React.useState(null);

  function onChange({ target }) {
    setRespostas({ ...respostas, [target.className]: target.value });
  }

  function acertosFinal() {
    const acertos = perguntas.filter(
      (pergunta) => pergunta.resposta === respostas[pergunta.id]
    );
    setAcertos(`Você acertou ${acertos.length} de ${perguntas.length}`);
  }

  function handleClick() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      acertosFinal();
    }
  }

  return (
    <article>
      <h1>Exercício 9 - Desafio formulário</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        {perguntas.map((pergunta, index) => (
          <Radio
            key={pergunta.id}
            {...pergunta}
            onChange={onChange}
            value={respostas[pergunta.id]}
            slide={index === slide}
          />
        ))}
        {acertos ? (
          <p>{acertos}</p>
        ) : (
          <button onClick={handleClick}>Próximo</button>
        )}
      </form>
    </article>
  );
};

export default Desafio;
