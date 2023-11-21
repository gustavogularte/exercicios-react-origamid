import React from 'react';

const Produto = ({ nome, propriedades }) => {
  return (
    <section style={{border: '1px solid', padding: '1rem', margin: '1rem'}}>
      <h4>{nome}</h4>
      <ul>
        {propriedades.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default Produto;
