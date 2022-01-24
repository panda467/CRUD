import { Request, Response } from "express"
import { DeleteProductsService } from "../services/DeleteProductsService"


export class DeleteProductsControllers {
    async handle( request: Request, response: Response) {

        // gera resposta
        const { id } = request.params;
        const service = new DeleteProductsService();
        const result = await service.execute(id);

        // avalia resultado
        if(result instanceof Error) {return response.status(400).json(result.message)};

        // devolve o resultado
        return response.status(200).end();
    }
}