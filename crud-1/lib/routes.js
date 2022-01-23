"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
// Categorias
const CreateCategoryControllers_1 = require("./controllers/CreateCategoryControllers");
const GetAllCategoriesControllers_1 = require("./controllers/GetAllCategoriesControllers");
const DeleteCategoryControllers_1 = require("./controllers/DeleteCategoryControllers");
const UpdateCategoryControllers_1 = require("./controllers/UpdateCategoryControllers");
// Produtos
const CreateProductsControllers_1 = require("./controllers/CreateProductsControllers");
const GetAllProductsControllers_1 = require("./controllers/GetAllProductsControllers");
const DeleteProductsControllers_1 = require("./controllers/DeleteProductsControllers");
const UpdateProductsControllers_1 = require("./controllers/UpdateProductsControllers");
// importando a classe rotas
const express_1 = require("express");
const routes = (0, express_1.Router)();
exports.routes = routes;
/**
 * [X] C - CREATE - POST
 * [X] R - READ   - GET
 * [X] U - UPDATE - PUT
 * [X] D - DELETE - DELETE
*/
// Categorias
routes.post("/categorias", new CreateCategoryControllers_1.CreateCategoryControllers().handle);
routes.get("/categorias", new GetAllCategoriesControllers_1.GetAllCategoriesControllers().handle);
routes.delete("/categorias/:id", new DeleteCategoryControllers_1.DeleteCategoryControllers().handle);
routes.put("/categorias/:id", new UpdateCategoryControllers_1.UpdateCategoryControllers().handle);
// Produtos 
routes.post("/produtos", new CreateProductsControllers_1.CreateProductsControllers().handle);
routes.get("/produtos", new GetAllProductsControllers_1.GetAllProductsControllers().handle);
routes.delete("/produtos/:id", new DeleteProductsControllers_1.DeleteProductsControllers().handle);
routes.put("/produtos/:id", new UpdateProductsControllers_1.UpdateProductsControllers().handle);
//# sourceMappingURL=routes.js.map