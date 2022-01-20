import { getRepository } from "typeorm";
import { Category } from "../entities/Category";


// atributos da categoria
type CategoryUpdateRequest = {
    id: string,
    nome: string;
    descrição: string;
}


export class UpdateCategoryService {

    async execute({id, nome, descrição}: CategoryUpdateRequest ) {

        // verifica categoria
        const rep = getRepository(Category);
        const category = await rep.findOne(id);
        if(!category){
            return new Error("essa categoria não existe!")
        }

        // altera categoria
        category.nome = nome ? nome : category.nome;
        category.descrição = descrição ? descrição : category.descrição;

        // salva alteração
        await rep.save(category);
        return category

    }
}