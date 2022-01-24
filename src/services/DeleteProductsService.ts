import { getRepository } from "typeorm";
import { Products } from "../entities/Products";


export class DeleteProductsService {

    async execute(id: string) {

        // verifica produto
        const rep = getRepository(Products);
        if(!(await rep.findOne(id))) {
            return new Error("Esse produto não existe!");
        }
        
        // deleta produto
        await rep.delete(id);
    }
}