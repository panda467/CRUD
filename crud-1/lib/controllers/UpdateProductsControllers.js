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
exports.UpdateProductsControllers = void 0;
const UpdateProductsService_1 = require("../services/UpdateProductsService");
class UpdateProductsControllers {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            // gera resposta
            const { id } = request.params;
            const { nome, preço, descrição, categoria_id } = request.body;
            const service = new UpdateProductsService_1.UpdateProductsService();
            const result = yield service.execute({ id, nome, preço, descrição, categoria_id });
            // avalia resultado
            if (result instanceof Error) {
                return response.status(400).json(result.message);
            }
            // devolve o resultado
            return response.json(result);
        });
    }
}
exports.UpdateProductsControllers = UpdateProductsControllers;
//# sourceMappingURL=UpdateProductsControllers.js.map