import { User } from '../users/user.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class seedingUser1639013494265 implements MigrationInterface {
  name = 'seedingUser1639013494265';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.save(
      queryRunner.manager.create<User>(User, {
        name: 'CERTI',
        email: 'teste@certi.org.br',
        createdAt: new Date(),
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE * FROM \`users\``);
  }
}
