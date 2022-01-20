import { Request, Response } from "express"
import { CreateProductsService } from "../services/CreateProductsService"


export class CreateProductsControllers {
    async handle( request: Request, response: Response){

        // gera resposta
        const {nome, preço, descrição, categoria_id} = request.body
        const service = new CreateProductsService();
        const result = await service.execute({nome, preço, descrição, categoria_id});

        // avalia resultado
        if(result instanceof Error) { return response.status(400).json(result.message)}

        // devolve o resultado
        return response.json(result);
    }
}