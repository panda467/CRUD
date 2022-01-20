import { Request, Response } from "express";
import { GetAllCategoriesService } from "../services/GetAllCategoriesService";

export class GetAllCategoriesControllers {
    async handle( request: Request, response: Response ) {
        
        // gera lista com todas categorias
        const service = new GetAllCategoriesService();
        const categories = await service.execute();

        // devolve lista
        return response.json(categories);
    }
}