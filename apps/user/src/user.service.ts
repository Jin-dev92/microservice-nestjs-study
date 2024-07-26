import { Injectable } from '@nestjs/common';
import { UserRepository } from '@app/database';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  getHello(): string {
    return 'Hello World!';
  }
}
