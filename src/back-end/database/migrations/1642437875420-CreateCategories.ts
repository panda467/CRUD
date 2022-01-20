import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCategories1642437875420 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "categorias",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },{
                        name: "nome",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "descrição",
                        type: "varchar"
                    },
                    {
                        name: "criado_em",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("categorias");
    }

}
