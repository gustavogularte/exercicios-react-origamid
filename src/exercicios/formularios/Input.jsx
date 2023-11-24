import React from 'react';

const formFields = [
  {
    id: 'nome',
    type: 'text',
    label: 'Nome',
  },
  {
    id: 'email',
    type: 'email',
    label: 'Email',
  },
  {
    id: 'senha',
    type: 'password',
    label: 'Senha',
  },
  {
    id: 'cep',
    type: 'text',
    label: 'CEP',
  },
  {
    id: 'rua',
    type: 'text',
    label: 'Rua',
  },
  {
    id: 'numero',
    type: 'text',
    label: 'Número',
  },
  {
    id: 'bairro',
    type: 'text',
    label: 'Bairro',
  },
  {
    id: 'cidade',
    type: 'text',
    label: 'Cidade',
  },
  {
    id: 'estado',
    type: 'text',
    label: 'Estado',
  },
];

const Input = () => {
  // Faça um fetch (POST) para a API abaixo
  // Para a criação ser aceita é necessário enviar dodos de:
  // nome, email, senha, cep, rua, numero, bairro, cidade e estado
  // Essa é a função utilizado para realizar o POST
  // fetch('https://ranekapi.origamid.dev/json/api/usuario', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   // form é o objeto com os dados do formulário
  //   body: JSON.stringify(form),
  // });
  // Mostre uma mensagem na tela, caso a resposta da API seja positiva
  const [form, setForm] = React.useState(
    formFields.reduce((acc, field) => {
      return { ...acc, [field.id]: '' };
    }, {})
  );
  const [response, setResponse] = React.useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      //form é o objeto com os dados do formulário
      body: JSON.stringify(form),
    }).then((response) => setResponse(response));
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <article>
      <h1>Exercício 7 - Input</h1>
      <form onSubmit={handleSubmit}>
        {formFields.map(({ id, type, label }) => (
          <div key={id}>
            <label htmlFor={id}>{label}</label>
            <input
              type={type}
              id={id}
              value={form[id]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button>Enviar</button>
        {response && response.ok && <p>Formulário enviado.</p>}
      </form>
    </article>
  );
};

export default Input;
