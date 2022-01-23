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
exports.CreateCategoryService = void 0;
const typeorm_1 = require("typeorm");
const Category_1 = require("../entities/Category");
class CreateCategoryService {
    execute({ nome, descrição }) {
        return __awaiter(this, void 0, void 0, function* () {
            // verifica categoria
            const rep = (0, typeorm_1.getRepository)(Category_1.Category);
            if (yield rep.findOne({ nome })) {
                return new Error("Essa categoria já existe!");
            }
            // monta e salva categoria
            const category = rep.create({ nome, descrição });
            yield rep.save(category);
            return category;
        });
    }
}
exports.CreateCategoryService = CreateCategoryService;
//# sourceMappingURL=CreateCategoryService.js.map