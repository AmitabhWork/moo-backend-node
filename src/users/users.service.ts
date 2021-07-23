import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { UserEntity } from './users.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    private userRepo: UsersRepository,
    private authService: AuthService,
  ) {}

  /**
   * @description find a user with a given username
   * @returns {Promise<UserEntity> } user if found
   * */
  public async getUserByUserName(username: string): Promise<UserEntity> {
    return await this.userRepo.findOne({ where: { username } });
  }

  /**
   * @description find a user with a given userId
   * @returns {Promise<UserEntity> } user if found
   * */
  public async getUserByUserId(userId: string): Promise<UserEntity> {
    return await this.userRepo.findOne({ where: { id: userId } });
  }
  /**
   * @description create a new user with given details
   * @returns {Promis<UserEntity>}user if created
   * */
  public async createUser(
    user: Partial<UserEntity>,
    password: string,
  ): Promise<UserEntity> {
    // create a new user
    const newUser = await this.userRepo.save(user);

    await this.authService.createPassowrForNewUser(newUser.id, password);

    // return the new user
    return newUser;
  }
  /**
   * @description update a user with given details
   * @returns {Promise<UserEntity>} user if updated
   * */
  public async updateUser(
    userid: string,
    newUserDetails: Partial<UserEntity>,
  ): Promise<UserEntity> {
    const existingUser = await this.userRepo.findOne({
      where: { id: userid },
    });
    if (!existingUser) {
      return null;
    }
    if (newUserDetails.bio) existingUser.bio = newUserDetails.bio;
    if (newUserDetails.avtar) existingUser.avtar = newUserDetails.avtar;
    if (newUserDetails.name) existingUser.name = newUserDetails.name;
    return await this.userRepo.save(existingUser);
  }
}
