// Categorias
import { CreateCategoryControllers   } from "./controllers/CreateCategoryControllers"
import { GetAllCategoriesControllers } from "./controllers/GetAllCategoriesControllers"
import { DeleteCategoryControllers   } from "./controllers/DeleteCategoryControllers"
import { UpdateCategoryControllers   } from "./controllers/UpdateCategoryControllers"


// Produtos
import { CreateProductsControllers   } from "./controllers/CreateProductsControllers"
import { GetAllProductsControllers   } from "./controllers/GetAllProductsControllers"
import { DeleteProductsControllers   } from "./controllers/DeleteProductsControllers"
import { UpdateProductsControllers   } from "./controllers/UpdateProductsControllers"


// importando a classe rotas
import { Router } from "express";
const routes = Router();



/**                                     Coversa de homens palitos:
 * [X] C - CREATE - POST                  - voce não acha estranho 
 * [X] R - READ   - GET        o     o       que um ser de outra dimensão nos observe?
 * [X] U - UPDATE - PUT       (|\   /|\
 * [X] D - DELETE - DELETE     |)   /|     - sim um pouco, sera que estamos vivendo na matrix? #perguntas sem respostas 
*/                                            



// Categorias
routes.post("/categorias",new CreateCategoryControllers().handle)
routes.get("/categorias",new GetAllCategoriesControllers().handle);
routes.delete("/categorias/:id",new DeleteCategoryControllers().handle);
routes.put("/categorias/:id",new UpdateCategoryControllers().handle);

// Produtos 
routes.post("/produtos",new CreateProductsControllers().handle);
routes.get("/produtos",new GetAllProductsControllers().handle);
routes.delete("/produtos/:id",new DeleteProductsControllers().handle);
routes.put("/produtos/:id",new UpdateProductsControllers().handle);


export{ routes };


//     hello!, passei só para te dar um oi mas lebre-se: 
//      se me ouvir falando talves seja hora de ir dormir programador!
//  \o
//   |\
//   |\