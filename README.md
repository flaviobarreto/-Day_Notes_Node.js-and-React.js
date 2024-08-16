Day Notes




Day Notes é uma aplicação web para gerenciar notas diárias, utilizando um back-end em Node.js e um front-end em React.js, com MongoDB como banco de dados. O projeto implementa funcionalidades CRUD completas, permitindo a criação, leitura, atualização e exclusão de notas.

📚 Funcionalidades
CRUD Completo: Adicione, edite, exclua e visualize notas.
Interface Dinâmica: As notas são exibidas em "caixinhas" que mudam dinamicamente conforme cada ação.
Banco de Dados: Armazena e gerencia as notas usando MongoDB.
🛠️ Tecnologias Utilizadas
Node.js: Servidor back-end.
Express.js: Framework para Node.js.
React.js: Biblioteca para criação de interfaces de usuário.
MongoDB: Banco de dados NoSQL para armazenamento de dados.
Mongoose: ODM para MongoDB.
Axios: Cliente HTTP para comunicação entre o front-end e back-end.
🎨 Capturas de Tela
Tela Principal


Adicionando uma Nota


Excluindo uma Nota


Lista de Notas


Editando uma Nota


🚀 Como Executar o Projeto
Clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/Day-Notes.git
Instale as dependências do back-end:

bash
Copiar código
cd backend
npm install
Instale as dependências do front-end:

bash
Copiar código
cd ../frontend
npm install
Configure as variáveis de ambiente:

Crie um arquivo .env no diretório backend com as seguintes variáveis:
bash
Copiar código
MONGO_URI=mongodb://localhost:27017/daynotes
PORT=5000
Execute o servidor back-end:

bash
Copiar código
npm start
Execute o front-end:

bash
Copiar código
npm start
Acesse a aplicação:

Front-end: http://localhost:3000
Back-end: http://localhost:5000/api
📄 Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.
