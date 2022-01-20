import { Request, Response } from "express"
import { UpdateCategoryService } from "../services/UpdateCategoryService";

export class UpdateCategoryControllers {
    async handle( request: Request, response: Response) {

        // gera resposta
        const {id} = request.params;
        const {nome, descrição} = request.body;
        const service = new UpdateCategoryService();
        const result = await service.execute({id,nome,descrição});

        // avalia resultado
        if(result instanceof Error){return response.status(400).json(result.message)}

        // devolve o resultado
        return response.json(result);
    }
}