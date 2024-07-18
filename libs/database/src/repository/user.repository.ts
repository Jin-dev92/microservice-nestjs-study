import { BaseRepository } from './core';
import { User } from '../entities';

export class UserRepository extends BaseRepository<User> {
  /* TYPEORM 함수의 오버라이딩이 필요한 경우 이곳에 구현 */
}
