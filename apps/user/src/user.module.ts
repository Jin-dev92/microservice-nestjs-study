import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './interface';
import { DatabaseModule } from '@app/database';

@Module({
  imports: [DatabaseModule.register('user')],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
