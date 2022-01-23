"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProducts1642440592653 = void 0;
const typeorm_1 = require("typeorm");
class CreateProducts1642440592653 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: "produtos",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    }, {
                        name: "nome",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "preço",
                        type: "numeric"
                    },
                    {
                        name: "descrição",
                        type: "varchar"
                    },
                    {
                        name: "categoria_id",
                        type: "uuid"
                    },
                    {
                        name: "criado_em",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [{
                        name: "fk_products_categrories",
                        columnNames: ["categoria_id"],
                        referencedTableName: "categorias",
                        referencedColumnNames: ["id"]
                    }]
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable("produtos");
        });
    }
}
exports.CreateProducts1642440592653 = CreateProducts1642440592653;
//# sourceMappingURL=1642440592653-CreateProducts.js.map