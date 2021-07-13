import { Controller, Get, Param } from '@nestjs/common';

@Controller('hashtags')
export class HashtagsController {
  @Get('/')
  getHashtags(): string {
    // TODO: add code
    return 'all top hashtags';
  }

  @Get('/:tag/posts')
  getPostsForHashtags(@Param() _param): string {
    // TODO:
    return `all posts with the hashtags ${_param.tag}`;
  }
}
