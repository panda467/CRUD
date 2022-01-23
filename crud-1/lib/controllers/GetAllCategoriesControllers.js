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
exports.GetAllCategoriesControllers = void 0;
const GetAllCategoriesService_1 = require("../services/GetAllCategoriesService");
class GetAllCategoriesControllers {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            // gera lista com todas categorias
            const service = new GetAllCategoriesService_1.GetAllCategoriesService();
            const categories = yield service.execute();
            // devolve lista
            return response.json(categories);
        });
    }
}
exports.GetAllCategoriesControllers = GetAllCategoriesControllers;
//# sourceMappingURL=GetAllCategoriesControllers.js.map