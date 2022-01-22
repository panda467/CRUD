import { getRepository } from "typeorm";
import { Products } from "../entities/Products";


export class GetAllProductsService {

    async execute() {

        // lista todos produtos
        const rep = getRepository(Products);
        const products = await rep.find({ relations: ["category"]});
        return products;
    }
} 

