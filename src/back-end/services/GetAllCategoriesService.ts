import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

export class GetAllCategoriesService {
    async execute() {

    // lista todas categorias 
     const rep = getRepository(Category);
     const categories = await rep.find();
     return categories;
    }
}