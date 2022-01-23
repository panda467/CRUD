import { Request, Response } from "express"

import { DeleteCategoryService } from "../services/DeleteCategoryService"


export class DeleteCategoryControllers {
    async handle( request: Request, response: Response) {

        // gera resposta
        const { id } = request.params;
        const service = new DeleteCategoryService();
        const result = await service.execute(id);

        // avalia resultado
        if(result instanceof Error) {return response.status(400).json(result.message)};

        // devolve o resultado
        return response.status(200).end();
    }
}