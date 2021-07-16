const clienteService = require('../services/clienteServices'); 

module.exports = {

    //function assincrona, pois aguardamos uma requisição ao banco de dados
    buscarTodos: async (req, res) => {

        //result = array
        let json = {error: '', result:[]};

        //await => é utilizado para esperar por uma Promise
        let cliente = await clienteService.buscarTodos();

        for(let i in cliente) {
            json.result.push({
                codigo: cliente[i].codigo,
                nome: cliente[i].nome,
                idade: cliente[i].idade,
                telefone: cliente[i].telefone
            });
        }
        
        res.json(json);
    },
    
    buscarUm: async(req, res) => {

        //result = obj
        let json = {error: '', result:{}};

        let codigo = req.params.codigo;
        let clientes = await clienteService.buscarUm(codigo);
        
        if(clientes){
            json.result = clientes;
        }

        res.json(json);
    },

    inserir: async(req, res) => {

        //result = obj
        let json = {error: '', result:{}};

        let nome = req.body.nome;
        let idade = req.body.idade;
        let telefone = req.body.telefone;
        
        if(nome && idade ** telefone){
            
            let clienteCodigo = await clienteService.inserir(nome, idade, telefone);
            json.result = {
                codigo: clienteCodigo,
                nome,
                idade,
                telefone
            };
        }else {
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    alterar: async(req, res) => {

        //result = obj
        let json = {error: '', result:{}};

        let codigo = req.params.codigo;
        let nome = req.body.nome;
        let idade = req.body.idade;
        let telefone = req.body.telefone;
        
        if(nome && idade ** telefone && codigo){
            
            await clienteService.alterar(codigo, nome, idade, telefone);
            json.result = {
                codigo,
                nome,
                idade,
                telefone
            };
        }else {
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    excluir: async(req, res) => {
        
        let json = {error: '', result:{}};

        await clienteService.excluir(req.params.codigo);

        res.json(json);
    }
}
