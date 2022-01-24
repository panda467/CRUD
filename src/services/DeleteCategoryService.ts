import { getRepository } from "typeorm";
import { Category } from "../entities/Category";


export class DeleteCategoryService {

    async execute(id: string) {

        // verifica categoria
        const rep = getRepository(Category);
        if(!(await rep.findOne(id))) {
            return new Error("Essa categoria não existe!");
        }

        // deleta categoria
        await rep.delete(id);
    }
}