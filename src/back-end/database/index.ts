import { createConnection } from "typeorm";

createConnection().then(function(){ console.log('Conexao com o banco de dados foi realizado!');}).catch(function (err) { console.log('Houve um problema de conexão com o banco de dados!, cache: ',err)});