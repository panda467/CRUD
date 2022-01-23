import { getRepository } from "typeorm";
import { Category } from "../entities/Category";
import { Products } from "../entities/Products";

// atributos do produto
type ProductsRequest = {
    nome: string;
    preço: number;
    descrição: string;
    categoria_id: string;

} 


export class CreateProductsService {

    async execute({nome, preço, descrição, categoria_id}: ProductsRequest ): Promise<Error | Products> {

        // verifica produto
        const rep = getRepository(Products);
        if(await rep.findOne({ nome })) {
            return new Error("Esse produto já existe!");
        }


        // verifica categoria
        const repCategory = getRepository(Category);
        if(!await repCategory.findOne(categoria_id)){
            return new Error("Essa categoria não existe!")
        }

        // monta e salva produto
        const product = rep.create({nome, preço, descrição, categoria_id});       
        await rep.save(product);
        return product;
    }
}