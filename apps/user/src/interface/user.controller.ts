import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { GetUsersDto } from './dto';
import { UserService } from '../user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @EventPattern('get-users')
  async getUsers(@Payload() payload: GetUsersDto, @Ctx() context: RmqContext) {
    console.log('get_users, payload', payload);
    console.log('get_users, context', context);
    // return await this.userService.getUsers(payload);
  }
}
