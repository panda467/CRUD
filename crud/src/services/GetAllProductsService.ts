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

//                                                                                                       pelo visto meu plano de ficar quieto não deu certo,              |~~~.'
//                                                                                                         de qualquer forma seja bem vindo ao meu castelo,    o          |~~~'.
//                                                                                                      gostaria de poder apertar sua mão                     /(          |
//                                                                                                       mas para isso precisaria mais que esses palitos! [[[]]]\         |         [[[]]]
//      oi, dessa vez vou ficar no canto para não atrapalhar!                                                                                             [[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]  
// \o                                                                                                                                                    [[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]] 
//  |\  /\  /\  /\  /\  /\  /\  /\  /\  /\  /\  /\  /\  /\  /\  /\  /\  /\  /\  /\  /\  /\  /\  /\  /\  /\  /\  /\  /\  /\  /\  /\  /\  /\  /\  /\  /\   [[[[[[[[[[[[[[[[  ]]]]]]]]]]]]]]]]
//  |\  ||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||-- [[[[[[[[[[[[[[[[  ]]]]]]]]]]]]]]]]
//'""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""[[[[[[[[[[[[[[[[  ]]]]]]]]]]]]]]]]