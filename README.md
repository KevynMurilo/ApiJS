# README

Este repositório contém um exemplo de aplicativo com conexão ao banco de dados MongoDB usando o Node.js e o framework Express.js. O aplicativo tem como objetivo demonstrar operações básicas relacionadas a autores e livros.

**Observação: Este projeto foi criado apenas para fins de estudo e aprendizado.**

## Pré-requisitos

Antes de executar este código, certifique-se de ter os seguintes requisitos instalados:

- Node.js: Você pode baixar a versão mais recente do Node.js em [nodejs.org](https://nodejs.org).
- MongoDB: Você precisa ter um servidor MongoDB em execução ou uma conta no MongoDB Atlas.

## Instalação

Siga as etapas abaixo para executar o aplicativo:

1. Clone o repositório para o seu ambiente local:

git clone <URL_DO_REPOSITORIO>

2. Navegue até o diretório do projeto:
 
cd <NOME_DO_DIRETORIO>


3. Instale as dependências necessárias executando o seguinte comando:

npm install


4. Configure a conexão com o banco de dados MongoDB:

- Abra o arquivo `config/dbConnect.js`.
- Substitua a URL de conexão `mongodb+srv://<USERNAME>:<PASSWORD>@<HOST>/<DATABASE>` com as suas próprias credenciais e detalhes de conexão.

5. Execute o aplicativo com o seguinte comando:

npm start


6. O aplicativo estará acessível no seu navegador em `http://localhost:3000`.

## Estrutura do Código

O aplicativo segue a seguinte estrutura de código:

- `config/dbConnect.js`: Arquivo de configuração que estabelece a conexão com o banco de dados MongoDB usando o Mongoose.
- `models/Autor.js`: Define o modelo de dados para a coleção "autores" no banco de dados MongoDB.
- `models/Livro.js`: Define o modelo de dados para a coleção "livros" no banco de dados MongoDB.
- `controllers/AutorController.js`: Controlador que lida com as operações relacionadas aos autores, como listar, cadastrar, atualizar e excluir.
- `controllers/LivroController.js`: Controlador que lida com as operações relacionadas aos livros, como listar, cadastrar, atualizar e excluir.
- `routes/autoresRoutes.js`: Define as rotas relacionadas aos autores, associando-as aos métodos correspondentes no controlador `AutorController`.
- `routes/livrosRoutes.js`: Define as rotas relacionadas aos livros, associando-as aos métodos correspondentes no controlador `LivroController`.
- `routes/index.js`: Define as rotas principais do aplicativo, incluindo as rotas relacionadas aos autores e aos livros.
- `app.js`: Arquivo principal do aplicativo, onde a conexão com o banco de dados é configurada e as rotas são registradas.

## Rotas Disponíveis

- **Autores**
  - `GET /autores`: Lista todos os autores cadastrados.
  - `GET /autores/:id`: Retorna os dados de um autor específico com base no ID.
  - `POST /autores`: Cadastra um novo autor.
  - `PUT /autores/:id`: Atualiza os dados de um autor existente com base no ID.
  - `DELETE /autores/:id`: Remove um autor existente com base no ID.

- **Livros**
  - `GET /livros`: Lista todos os livros cadastrados.
  - `GET /livros/busca?editora=<NOME_DA_EDITORA>`: Retorna os livros de uma editora específica.
  - `GET /livros/:id`: Retorna os dados de um livro específico com base no ID.
  - `POST /livros`: Cadastra um novo livro.
  - `PUT /livros/:id`: Atualiza os dados de um livro existente com base no ID.
  - `DELETE /livros/:id`: Remove um livro existente com base no ID.





