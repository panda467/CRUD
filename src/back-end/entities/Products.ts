import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm"
import {v4 as uuid} from "uuid"
import { Category } from "./Category";

@Entity("produtos")
export class Products {

    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;
    
    @Column()
    preço: number;

    @Column()
    descrição: string;

    @Column()
    categoria_id: string;

    @ManyToOne(() => Category)
    @JoinColumn({name: "categoria_id"})
    category: Category;

    @CreateDateColumn()
    criado_em: Date;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
}