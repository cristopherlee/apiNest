import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createUserTable1639012973744 implements MigrationInterface {
    name = 'createUserTable1639012973744';
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        // this ensure we can use default: `uuid_generate_v4()`
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: "uuid",
                    isPrimary: true,
                    isUnique: true,
                    generationStrategy: 'uuid',
                    default: `uuid_generate_v4()`
                },
                {
                    name: 'name',
                    type: 'varchar',
                    //default: ''
                },
                {
                    name: 'email',
                    type: 'varchar',
                    //default: ''
                },
                {
                    name: 'createdAt',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP'
                },
                {
                    name: 'updatedAt',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP'
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`users\``);
    }
}
