import React from 'react';

const ExUseEffect = () => {
  // Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
  // https://ranekapi.origamid.dev/json/api/produto/notebook
  // https://ranekapi.origamid.dev/json/api/produto/smartphone
  // Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
  // Defina o produto clicado como uma preferência do usuário no localStorage
  // Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo
  const [produtos, setProdutos] = React.useState(null);
  const [produtoNome, setProdutoNome] = React.useState(null);

  React.useEffect(() => {
    const localProduto = window.localStorage.getItem('produto');
    if (localProduto !== null) {
      setProdutoNome(localProduto);
      fetchProduto(localProduto);
    }
  }, []);

  async function fetchProduto(produto) {
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${produto}`
    );
    const json = await response.json();
    setProdutos(json);
    window.localStorage.setItem('produto', produto);
  }

  function handleClick({ target }) {
    setProdutoNome(target.innerText);
    fetchProduto(target.innerText);
  }

  return (
    <article>
      <h1>Exercício 5 - useEffect</h1>
      <h3>Preferência: {produtoNome}</h3>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      {produtos && (
        <section>
          <h2>{produtos.nome}</h2>
          <p>R$ {produtos.preco}</p>
          <img src={produtos.fotos[0].src} alt={produtos.fotos[0].titulo} />
        </section>
      )}
    </article>
  );
};

export default ExUseEffect;
