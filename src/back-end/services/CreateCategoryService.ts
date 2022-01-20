import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

// atributos da categoria
type CategoryRequest = { 
    nome: string;
    descrição: string;
}

export class CreateCategoryService {

    async execute({nome, descrição}:CategoryRequest ): Promise<Category | Error>{

        // verifica categoria
        const rep = getRepository(Category);
        if(await rep.findOne({ nome })) {
            return new Error("Essa categoria já existe!");
        }

        // monta e salva categoria
        const category = rep.create({ nome, descrição});
        await rep.save(category);
        return category
    }
}