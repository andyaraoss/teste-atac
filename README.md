# teste-atac

Trata-se de uma api desenvolvida para salvar ajudar uma empresa que realiza limpeza em residências em sua organização.

## Principais tecnologias utilizadas:

- #### Node
- #### NestJS
- #### postgreSQL

## Instalação

1. Clone este repositório em sua máquina;

2. Acesse o repositório clonado através de um terminal, pode ser o terminal integrado do vsCode ou o terminal do seu computador;

3. Digite o seguinte comando no terminal **`npm install`**, isso fará com que todas as dependências do projeto sejam instaladas;

4. Após todas as depêndencias instaladas, crie um novo banco de dados, utilizando o PostgreSQL;

5. Após a criação do banco de dados, vá até a pasta **`sql`**, na raiz do projeto. Dentro desta pasta está o arquivo **`createClientTable.sql`**, onde se encontra o comando para a criação da tabela **`clientes`**.

6. No terminal, certifique-se de que está conectado ao banco de dados criado anteriormente e cole o comando de criação de tabela;

7. Abra o arquivo **`.env.example`**, ele contém as informações necessárias para conectarmos o servidor ao banco;

8. Crie um arquivo **`.env`** substituindo as informações do **`.env.example`**, pelas suas informações de conexão;

9. Após criação do banco e conexão feitas, execute o comando **`npm run start:dev`** no terminal do projeto para rodar o servidor;

10. A aplicação conta com uma documentação para auxiliar o entendimento das rotas, você terá acesso à ela no link **`http://localhost:3000/doc/`**;

11. Por fim, vá para o repositório do front-end, para continuar com os procedimentos (https://github.com/andyaraoss/teste-atac-front).
