import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { UserAuthRoleEnum } from '@app/database';

export class CreateUserAuth1720945324492 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
      name: 'UserAuth',
      columns: [
        {
          name: 'id',
          type: 'integer',
          isPrimary: true,
          isGenerated: true,
        },
        {
          name: 'password',
          type: 'varchar',
          length: '255',
        },
        {
          name: 'salt',
          type: 'varchar',
          length: '255',
          isNullable: true,
          default: null,
        },
        {
          name: 'role',
          type: 'enum',
          enum: ['ADMIN', 'USER'],
          // default: "'USER'",
          default: UserAuthRoleEnum.USER,
        },
        {
          name: 'accessToken',
          type: 'varchar',
          length: '255',
        },
        {
          name: 'refreshToken',
          type: 'varchar',
          length: '255',
          isNullable: true,
          default: null,
        },
        {
          name: 'user_id',
          type: 'integer',
          onUpdate: 'CASCADE',
        },
      ],
    });
    await queryRunner.createTable(table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('UserAuth');
  }
}
