import React from 'react';
import { GlobalContext } from './GlobalContext';
import Produto from './Limpar';
import Limpar from './Limpar';

const ExUseContext = () => {
  // Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
  // https://ranekapi.origamid.dev/json/api/produto/
  // assim que o usuário acessar o app
  // coloque os dados da API no contexto global, dando acesso aos dados da mesma
  // defina uma função chamada limparDados que é responsável por zerar os dados de produto
  // e exponha essa função no contexto global
  const { produto } = React.useContext(GlobalContext);
  if (produto === null)
    return (
      <article>
        <h1>Exercício 6 - useContext</h1>
      </article>
    );

  return (
    <article>
      <h1>Exercício 6 - useContext</h1>
      <section>
        <ul>
          {produto.map(({ nome, id }) => (
            <li key={id}>{nome}</li>
          ))}
        </ul>
        <Limpar />
      </section>
    </article>
  );
};

export default ExUseContext;
