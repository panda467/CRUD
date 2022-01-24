import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProducts1642440592653 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "produtos",
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
                        name: "preço",
                        type: "numeric"
                    },
                    {
                        name: "descrição",
                        type: "varchar"
                    },
                    {
                        name: "categoria_id",
                        type: "uuid"
                    },
                    {
                        name: "criado_em",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [{
                    name: "fk_products_categrories",
                    columnNames: ["categoria_id"],
                    referencedTableName: "categorias",
                    referencedColumnNames: ["id"]
                }]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("produtos")
    }

}
