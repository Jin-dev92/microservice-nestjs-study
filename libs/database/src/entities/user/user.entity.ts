import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { IsEmail, IsOptional } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'uuid', unique: true, generated: 'uuid' })
  uuid: string;

  @Column({ type: 'varchar', length: 20 })
  name: string;

  @IsEmail()
  @Column({ type: 'varchar', length: 50 })
  email: string;

  @CreateDateColumn()
  // @Column({ type: 'timestamp with local time zone', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn()
  // @Column({ type: 'timestamp with local time zone', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @IsOptional()
  @Column({ type: 'timestamp with local time zone' })
  deleteAt: Date;
}
