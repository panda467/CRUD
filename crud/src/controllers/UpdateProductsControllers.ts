import { Request, Response } from "express"
import { UpdateProductsService } from "../services/UpdateProductsService";

export class UpdateProductsControllers {
    async handle( request: Request, response: Response) {

        // gera resposta
        const {id} = request.params;
        const {nome, preço, descrição, categoria_id} = request.body;
        const service = new UpdateProductsService();
        const result = await service.execute({id,nome, preço, descrição, categoria_id});

        // avalia resultado
        if(result instanceof Error){return response.status(400).json(result.message)}

        // devolve o resultado
        return response.json(result);
    }
}