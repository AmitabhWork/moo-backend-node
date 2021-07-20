import { Injectable } from '@nestjs/common';
import { UserEntity } from './users.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private userRepo: UsersRepository) {}
  public async getUserByUserName(username: string): Promise<UserEntity> {
    return await this.userRepo.findOne({ where: { username } });
  }
}
