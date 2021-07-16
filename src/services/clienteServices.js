const db = require('../db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado)=>{

            //query => pedido de uma informação/dado
            db.query('SELECT * FROM clientes', (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },
    
    buscarUm: (codigo) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM clientes WHERE codigo = ?', [codigo], (error, results)=>{
                if(error) { rejeitado(error); return; }
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });
        });
    },

    inserir: (nome, idade, telefone) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('INSERT INTO clientes (nome, idade, telefone) VALUES (?, ?, ?)',
                [nome, idade, telefone], 
                (error, results) =>{
                    if(error) { rejeitado(error); return; }
                    aceito(results.insertCodigo);
                }
            );
        });
    },

    alterar: (codigo, nome, idade, telefone) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('UPDATE clientes SET nome = ?, idade = ?, telefone = ? WHERE codigo = ?',
                [nome, idade, telefone, codigo], 
                (error, results) =>{
                    if(error) { rejeitado(error); return; }
                    aceito(results);
                }
            );
        });
    },

    excluir: (codigo) => {
        return new Promise((aceito, rejeitado) =>{

            db.query('DELETE FROM clientes WHERE codigo = ?', [codigo], 
            (error, results) =>{
                if(error){
                    rejeitado(error);
                    return;
                }
                aceito(results);
            });
        })
    }
};