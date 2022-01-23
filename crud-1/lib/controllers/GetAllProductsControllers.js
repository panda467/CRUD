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
exports.GetAllProductsControllers = void 0;
const GetAllProductsService_1 = require("../services/GetAllProductsService");
class GetAllProductsControllers {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            // gera lista com todos produtos
            const service = new GetAllProductsService_1.GetAllProductsService();
            const products = yield service.execute();
            // devolve lista
            return response.json(products);
        });
    }
}
exports.GetAllProductsControllers = GetAllProductsControllers;
//# sourceMappingURL=GetAllProductsControllers.js.map