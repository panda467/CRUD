import { Request, Response } from "express";
import { GetAllProductsService } from "../services/GetAllProductsService";


export class GetAllProductsControllers {
    async handle( request: Request,response: Response ) {

        // gera lista com todos produtos
        const service = new GetAllProductsService();
        const products = await service.execute();

        // devolve lista
        return response.json(products);
    }
}