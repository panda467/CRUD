import { getRepository } from "typeorm";
import { Category } from "../entities/Category";
import { Products } from "../entities/Products";

// atributos do produto
type ProductsUpdateRequest = {
    id: string,
    nome: string;
    preço: number;
    descrição: string;
    categoria_id: string;
}


export class UpdateProductsService {

    async execute({id, nome, preço, descrição, categoria_id}: ProductsUpdateRequest ) {

        // verifica produto
        const rep = getRepository(Products);
        const product = await rep.findOne(id);
        if(!product){
            return new Error("esse produto não existe!")
        }

        // altera produto
        product.nome = nome ? nome : product.nome;
        product.preço =  preço ? preço : product.preço;
        product.descrição = descrição ? descrição : product.descrição;
        product.categoria_id = categoria_id ? categoria_id : product.categoria_id;

        // verifica categoria
        const repCategory = getRepository(Category);
        if(!await repCategory.findOne(categoria_id)){
            return new Error("Essa categoria não existe!")
        }

        // salva alterações
        await rep.save(product);
        return product

    }
}