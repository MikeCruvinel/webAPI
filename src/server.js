//chamando o arquivo de var de sistema
//dotenv => dependencia para entender o arquivo .env
require('dotenv').config({path:'variaveis.env'});

//usando express aqui tbm
const express = require('express');

//cors => permição ao acesso para trabalhar com API (recursos de outros dominios e etc)
const cors = require('cors');

//body-parser => modulo capaz de converter o body para varios outros formatos
const bodyParser = require('body-parser');

//mostrando para o servidor onde estão as rotas
const routes = require('./routes');

const server = express();

server.use(cors());

//body-parser => middleware que dá habilidade ao express
//de analisar o conteúdo das solicitações antes de fazermos alguma manipulação.
server.use(bodyParser.urlencoded({extend: false}));

///api => prefixo
//faz com que todos endereços das rotas tenha o mesmo prefixo /routes
server.use('/api', routes);

//process.env => para ler a var PORT
//function anonima.
server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`)
})
