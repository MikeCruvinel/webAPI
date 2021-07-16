//chamando dependecia mysql
const mysql = require('mysql'); 

//buscando variáveis do arquivo .env
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

//Caso erro
connection.connect((error) => {
    if(error) throw(error);
    console.log(`Conectado com o banco de dados: ${process.env.DB_NAME}`);
});

module.exports = connection;