import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm"

import {v4 as uuid} from "uuid"
@Entity("categorias")
export class Category {

    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;

    @Column()
    descrição: string;

    @CreateDateColumn()
    criado_em: Date;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
}