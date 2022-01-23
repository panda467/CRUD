"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
(0, typeorm_1.createConnection)().then(function () { console.log('Conexao com o banco de dados foi realizado!'); }).catch(function (err) { console.log('Houve um problema de conexão com o banco de dados!, cache: ', err); });
//# sourceMappingURL=index.js.map