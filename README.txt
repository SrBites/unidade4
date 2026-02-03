Codigo oficial está no repositorio: https://github.com/SrBites/unidade4.git
com livre acesso.

execute:
git clone https://github.com/SrBites/unidade4.git 

em seguida pode continuar com os passos seguintes de instalação.

1 - Instale as dependências:

na linha de comando execute:
npm install

Verifique o Banco: Certifique-se que o MongoDB está rodando (mongod ou serviço do Windows).

Suba a API:

na linha de comando execute:
npm start

A API rodará em: http://localhost:3000


2 - explicando como montar as requisições pela linha de comando


-Criar Livro (POST)
Envia um JSON no corpo da requisição para cadastrar um novo registro.

Endpoint: /api/livros

Body Obrigatório: titulo, autor, ano, genero.

na linha de comando execute:
curl -X POST http://localhost:3000/api/livros -H "Content-Type: application/json" -d "{\"titulo\": \"Clean Code\", \"autor\": \"Robert\", \"ano\": 2008, \"genero\": \"Tecnologia\"}"


-Listar Livros (GET)
Retorna um array com todos os livros cadastrados no banco.

Endpoint: /api/livros

na linha de comando execute:
curl -X GET http://localhost:3000/api/livros


-Atualizar Livro (PUT)
Atualiza os dados de um livro específico. O ID deve ser passado na URL.

Endpoint: /api/livros/{ID}

Como usar: Copie o _id retornado no GET e substitua no lugar de COLE_O_ID_AQUI

na linha de comando execute:
curl -X PUT http://localhost:3000/api/livros/COLE_O_ID_AQUI -H "Content-Type: application/json" -d "{\"ano\": 2024, \"titulo\": \"Clean Code: Edição Revisada\"}"


-Deletar Livro (DELETE)
Remove permanentemente um registro do banco a partir de um ID.

Endpoint: /api/livros/{ID}

na linha de comando execute:
curl -X DELETE http://localhost:3000/api/livros/COLE_O_ID_AQUI


3 - Exemplo de objeto retornado pelo banco:
{
  "_id": "64f8a1b2c3d4e5f6g7h8i9j0",
  "titulo": "O Hobbit",
  "autor": "Tolkien",
  "ano": 1937,
  "genero": "Fantasia",
  "criadoEm": "2023-09-06T14:00:00.000Z",
  "__v": 0
}
