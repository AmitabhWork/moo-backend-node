import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/')
  getHashtags(): string {
    // TODO: add code
    return 'all top Users';
  }
  @Get('/@:username')
  getUserByUsername(@Param() _param): string {
    return `details of usernaem = ${_param.username}`;
  }
  @Get('/:userId')
  getUserByUserId(@Param() _param): string {
    return `details of userId = ${_param.userId}`;
  }
  @Post('/')
  createNewUser(): string {
    return 'new user created';
  }

  @Patch('/:userid')
  updateUserDetails(@Param() param): string {
    return `details of user (id = ${param.userid}) updated`;
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
