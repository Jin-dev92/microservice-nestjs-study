import { BaseRepository } from './core';
import { User } from '@app/database/schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor(
    @InjectModel(User.name)
    private readonly model: Model<User>,
  ) {
    super(model);
  }
}
