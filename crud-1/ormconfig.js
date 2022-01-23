"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require('dotenv');
dotenv.config({ path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.user' });
exports.default = {
    "type": process.env.TYPEORM_CONNECTION,
    "host": process.env.TYPEORM_HOST,
    "port": process.env.TYPEORM_PORT,
    "username": process.env.TYPEORM_USERNAME,
    "password": process.env.TYPEORM_PASSWORD,
    "database": process.env.TYPEORM_DATABASE,
    "entities": [__dirname + process.env.TYPEORM_ENTITIES],
    "migrations": [__dirname + process.env.TYPEORM_MIGRATIONS],
    "cli": { "migrationsDir": __dirname + process.env.TYPEORM_MIGRATIONS_DIR, "entitiesDir": __dirname + process.env.TYPEORM_ENTITIES_DIR }
};
//# sourceMappingURL=ormconfig.js.map