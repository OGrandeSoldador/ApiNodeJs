const pages = {
    home: `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Documentação da API</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #0e1224;
          color: #ffffff;
          margin: 0;
          padding: 0;
        }
        header {
          background-color: #1a1e3b;
          padding: 20px;
          text-align: center;
        }
        header h1 {
          margin: 0;
          font-size: 2em;
        }
        nav {
          background-color: #1a1e3b;
          padding: 10px;
          text-align: center;
        }
        nav a {
          color: #ffffff;
          margin: 0 15px;
          text-decoration: none;
          font-size: 1.1em;
        }
        nav a:hover {
          text-decoration: underline;
        }
        main {
          padding: 20px;
        }
        section {
          margin-bottom: 20px;
        }
        section h2 {
          font-size: 1.5em;
          border-bottom: 2px solid #ffffff;
          padding-bottom: 5px;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        ul li {
          background-color: #1a1e3b;
          margin: 10px 0;
          padding: 10px;
          border-radius: 5px;
        }
        ul li b {
          color: #f0f0f0;
        }
        footer {
          background-color: #1a1e3b;
          padding: 10px;
          text-align: center;
          position: fixed;
          width: 100%;
          bottom: 0;
        }
      </style>
    </head>
    <body>
      <header>
        <h1>Documentação da API</h1>
      </header>
      <nav>
        <a href="#overview">Visão Geral</a>
        <a href="#routes">Rotas</a>
        <a href="#authentication">Autenticação</a>
        <a href="#examples">Exemplos</a>
      </nav>
      <main>
        <section id="overview">
          <h2>Visão Geral</h2>
          <p>Esta API oferece endpoints para interação com perfis do GitHub e gerenciamento de registros de contas com autenticação.</p>
        </section>
        <section id="routes">
          <h2>Rotas da Aplicação</h2>
          <ul>
            <li>
              <p><b>GET /github</b></p>
              <p>Retorna um JSON com informações detalhadas do perfil do GitHub.</p>
            </li>
            <li>
              <p><b>POST /register</b></p>
              <p>Realiza o registro de uma nova conta, incluindo validação de autenticação.</p>
            </li>
          </ul>
        </section>
        <section id="authentication">
          <h2>Autenticação</h2>
          <p>Para acessar os endpoints protegidos, utilize o método de autenticação baseado em tokens JWT. Inclua o token no cabeçalho da requisição como 'Authorization: Bearer {seu_token}'.</p>
        </section>
        <section id="examples">
          <h2>Exemplos de Uso</h2>
          <pre><code>fetch('http://localhost:3000/github', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer seu_token_aqui'
      }
    })
      .then(response => response.json())
      .then(data => console.log(data));</code></pre>
        </section>
      </main>
        <footer style="height: 50px; padding: 5px; text-align: center;">
        <h2 style="margin: 0;">&copy; 2025 MJMF Corp</h2>
        <p style="margin: 0; font-size: 14px;">Marquin and Jeffin are Mingueru's friends</p>
        </footer>
    </body>
    </html>
      `

}

export default pages;