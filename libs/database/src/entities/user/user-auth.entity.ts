import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsOptional } from 'class-validator';
import { User } from './user.entity';
import { UserAuthRoleEnum } from '@app/database/types';

@Entity()
export class UserAuth {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({
    type: 'enum',
    enum: UserAuthRoleEnum,
    default: UserAuthRoleEnum.USER,
  })
  role: UserAuthRoleEnum;

  @IsOptional()
  @Column({ default: null, type: 'varchar', length: 255 })
  salt: string;

  // @IsNotEmpty()
  @Column({ type: 'varchar', length: 255 })
  accessToken: string;

  @IsOptional()
  @Column({ default: null, type: 'varchar', length: 255 })
  refreshToken: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
