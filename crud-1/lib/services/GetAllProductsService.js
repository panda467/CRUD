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
exports.GetAllProductsService = void 0;
const typeorm_1 = require("typeorm");
const Products_1 = require("../entities/Products");
class GetAllProductsService {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            // lista todos produtos
            const rep = (0, typeorm_1.getRepository)(Products_1.Products);
            const products = yield rep.find({ relations: ["category"] });
            return products;
        });
    }
}
exports.GetAllProductsService = GetAllProductsService;
//# sourceMappingURL=GetAllProductsService.js.map