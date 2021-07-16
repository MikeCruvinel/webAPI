//confg caminhos para as rotas
const express = require("express");
const router = express.Router();

//Agora o arquivo routes "enxerga" meu arquivo clienteController
const ClienteController = require('./controllers/clienteController');

//criando uma rota para pegar todos os clientes
router.get('/clientes', ClienteController.buscarTodos);

//criando uma rota para pegar apenas um dos clites
router.get('/cliente/:codigo', ClienteController.buscarUm);

//criando rota para adicionar dados
router.post('/cliente', ClienteController.inserir);

//criando rota para alteração
router.put('/cliente/:codigo', ClienteController.alterar);

//criando rota de exclusão
router.delete('/cliente/:codigo', ClienteController.excluir);


//exportando a rota
module.exports = router;

