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
exports.DeleteCategoryControllers = void 0;
const DeleteCategoryService_1 = require("../services/DeleteCategoryService");
class DeleteCategoryControllers {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            // gera resposta
            const { id } = request.params;
            const service = new DeleteCategoryService_1.DeleteCategoryService();
            const result = yield service.execute(id);
            // avalia resultado
            if (result instanceof Error) {
                return response.status(400).json(result.message);
            }
            ;
            // devolve o resultado
            return response.status(200).end();
        });
    }
}
exports.DeleteCategoryControllers = DeleteCategoryControllers;
//# sourceMappingURL=DeleteCategoryControllers.js.map