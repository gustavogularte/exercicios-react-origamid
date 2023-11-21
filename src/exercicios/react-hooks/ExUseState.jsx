import React from 'react';

const ExUseState = () => {
  // Os links abaixo puxam dados de um produto em formato JSON
  // https://ranekapi.origamid.dev/json/api/produto/tablet
  // https://ranekapi.origamid.dev/json/api/produto/smartphone
  // https://ranekapi.origamid.dev/json/api/produto/notebook
  // Crie uma interface com 3 botões, um para cada produto.
  // Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
  // Mostre apenas um produto por vez
  // Mostre a mensagem carregando... enquanto o fetch é realizado

  const [produtos, setProdutos] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [erro, setErro] = React.useState(null);

  async function fetchProdutos({ target }) {
    setLoading(true);
    setProdutos(null);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${target.innerText}`
    );
    const json = await response.json();
    setProdutos(json);
    setLoading(false);
  }

  return (
    <article>
      <h1>Exercício 4 - useState</h1>
      <button onClick={fetchProdutos}>notebook</button>
      <button onClick={fetchProdutos}>smartphone</button>
      <button onClick={fetchProdutos}>tablet</button>
      {loading && <p>Loading...</p>}
      {!loading && produtos && (
        <section>
          <h2>{produtos.nome}</h2>
          <p>R$ {produtos.preco}</p>
          <img src={produtos.fotos[0].src} alt={produtos.fotos[0].titulo} />
        </section>
      )}
    </article>
  );
};

export default ExUseState;
