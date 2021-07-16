# webAPI

web api construída em NodeJS A aplicação conta com um CRUD, onde é possível realizar buscas, edições e deletes no banco de dados e tendo o retorno no formato JSON.

Para a aplicação utilizei o banco MySql.

Para testar a API, utilizei o site rest test test: https://resttesttest.com/ Para realizar uma busca, primeiro abra a aplicação em seu vsCode e execute o comando no terminal: npm start. Pronto, aqui você já tera seu servidor rodando e conectado com o banco de dados.

Para realizar uma busca de todos os componentes em seu banco de dados, vá até o site rest test, escolha a opção GET e digite a seguinte rota: http://localhost:3000/api/clientes. Aqui você tera um retorno em JSON de todos os componentes.

Para realizar uma busca unitária, seguimos o mesmo padrão anterior, porem vamos alterar a rota para: http://localhost:3000/api/cliente/1. Note que o numero no final da rota, é indicativo do código do cliente. Caso queira buscar o cliente 2, bastaria trocar.

Para realizar um insert em sua tabela, troque o Method para POST e adicione os seguintes parametros: nome, idade, telefone. Logo em seguida, adicione os valores para os respectivos parametros e mude a rota para: http://localhost:3000/api/cliente.

Para realizar uma edição, altere o method para PUT e adicione os parametros como anteriormente e troque a rota para: http://localhost:3000/api/cliente/3. Note que o código no final da rota, será o código do cliente que irá substituir os dados.

E por fim, para realizar um delete, altere o method para DELETE, exclua os parametros e troque a rota para: http://localhost:3000/api/cliente/3. Note que o código no final da rota, será o código do cliente que será deletado.
