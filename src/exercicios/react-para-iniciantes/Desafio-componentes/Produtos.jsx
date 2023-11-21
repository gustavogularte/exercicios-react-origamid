import React from 'react';
import Titulo from './Titulo';
import Produto from './Produto';

const Produtos = ({ produtos }) => {
  return (
    <section>
      <Titulo texto="Produtos" />
      {produtos.map((produto) => (
        <Produto key={produto.nome} {...produto} />
      ))}
    </section>
  );
};

export default Produtos;
