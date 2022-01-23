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
exports.CreateProductsService = void 0;
const typeorm_1 = require("typeorm");
const Category_1 = require("../entities/Category");
const Products_1 = require("../entities/Products");
class CreateProductsService {
    execute({ nome, preço, descrição, categoria_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            // verifica produto
            const rep = (0, typeorm_1.getRepository)(Products_1.Products);
            if (yield rep.findOne({ nome })) {
                return new Error("Esse produto já existe!");
            }
            // verifica categoria
            const repCategory = (0, typeorm_1.getRepository)(Category_1.Category);
            if (!(yield repCategory.findOne(categoria_id))) {
                return new Error("Essa categoria não existe!");
            }
            // monta e salva produto
            const product = rep.create({ nome, preço, descrição, categoria_id });
            yield rep.save(product);
            return product;
        });
    }
}
exports.CreateProductsService = CreateProductsService;
//# sourceMappingURL=CreateProductsService.js.map