import { Request, Response } from "express"
import { CreateCategoryService } from "../services/CreateCategoryService"


export class CreateCategoryControllers {
    async handle( request: Request, response: Response) {

        // gera resposta
        const {nome, descrição} = request.body
        const service = new CreateCategoryService();
        const result = await service.execute({nome, descrição});

        // avalia resultado
        if(result instanceof Error) { return response.status(400).json(result.message)};

        // devolve o resultado
        return response.json(result);
    }
}