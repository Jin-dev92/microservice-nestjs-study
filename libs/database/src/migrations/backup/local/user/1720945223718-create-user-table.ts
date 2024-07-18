import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserTable1720945223718 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
      name: 'User',
      columns: [
        {
          name: 'id',
          type: 'integer',
          isPrimary: true,
          isGenerated: true,
        },
        {
          name: 'uuid',
          type: 'uuid',
          isUnique: true,
          generationStrategy: 'uuid',
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'email',
          type: 'varchar',
        },
        {
          name: 'createdAt',
          type: 'date',
          default: 'CURRENT_TIMESTAMP',
        },
        {
          name: 'updatedAt',
          type: 'date',
          default: 'CURRENT_TIMESTAMP',
        },
        {
          name: 'deleteAt',
          type: 'date',
          default: null,
          isNullable: true,
        },
      ],
    });
    await queryRunner.createTable(table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('User');
  }
}
