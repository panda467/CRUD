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
exports.UpdateCategoryService = void 0;
const typeorm_1 = require("typeorm");
const Category_1 = require("../entities/Category");
class UpdateCategoryService {
    execute({ id, nome, descrição }) {
        return __awaiter(this, void 0, void 0, function* () {
            // verifica categoria
            const rep = (0, typeorm_1.getRepository)(Category_1.Category);
            const category = yield rep.findOne(id);
            if (!category) {
                return new Error("essa categoria não existe!");
            }
            // altera categoria
            category.nome = nome ? nome : category.nome;
            category.descrição = descrição ? descrição : category.descrição;
            // salva alteração
            yield rep.save(category);
            return category;
        });
    }
}
exports.UpdateCategoryService = UpdateCategoryService;
//# sourceMappingURL=UpdateCategoryService.js.map