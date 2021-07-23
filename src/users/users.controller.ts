import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiProperty, ApiPropertyOptional, ApiTags } from '@nestjs/swagger';
import { NotFoundError } from 'rxjs';
import { UserEntity } from './users.entity';
import { UsersService } from './users.service';

export class UserCreateRequestBody {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
  @ApiPropertyOptional()
  name?: string;
  @ApiPropertyOptional()
  avatar?: string;
  @ApiPropertyOptional()
  bio?: string;
}
export class UserUpdateRequestBody {
  @ApiProperty()
  username: string;
  @ApiPropertyOptional()
  password?: string;
  @ApiPropertyOptional()
  name?: string;
  @ApiPropertyOptional()
  avatar?: string;
  @ApiPropertyOptional()
  bio?: string;
}
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('/')
  getHashtags(): string {
    // TODO: add code
    return 'all top Users';
  }

  @Get('/@:username')
  async getUserByUsername(
    @Param('username') username: string,
  ): Promise<UserEntity> {
    const user = await this.userService.getUserByUserName(username);
    if (!user) {
      throw new NotFoundException(`User ${username} not found`);
    }
    return user;
  }

  @Get('/:userid')
  async getUserByUserId(@Param('userid') userid: string): Promise<UserEntity> {
    const user = await this.userService.getUserByUserId(userid);
    if (!user) {
      throw new NotFoundException(`User ${userid} not found`);
    }
    return user;
  }

  @Post('/')
  async createNewUser(
    @Body() createUserRequest: UserCreateRequestBody,
  ): Promise<UserEntity> {
    const user = await this.userService.createUser(
      createUserRequest,
      createUserRequest.password,
    );
    return user;
  }

  @Patch('/:userid')
  async updateUserDetails(
    @Param('userid') userid: string,
    @Body() updateUserRequest: UserUpdateRequestBody,
  ): Promise<UserEntity> {
    const user = await this.userService.updateUser(userid, updateUserRequest);
    return user;
  }

  @Put('/:userid/follow')
  followUser(): string {
    return 'you followed user';
  }

  @Delete('/:userid/follow')
  unfollowUser(): string {
    return 'you unfollowed user';
  }

  @Get('/:userid/followers')
  getFollowersOfUser(): string {
    return 'get followers of user';
  }

  @Put('/:userid/followees')
  getFolloweesOfUser(): string {
    return `get followees of given user`;
  }
}
