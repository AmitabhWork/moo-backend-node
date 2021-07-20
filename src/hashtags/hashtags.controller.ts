import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('hashtags')
@Controller('hashtags')
export class HashtagsController {
  @Get('/')
  getHashtags(): string {
    // TODO: add code
    return 'all top hashtags';
  }

  @Get('/:tag/posts')
  getPostsForHashtags(@Param('tag') tag: string): string {
    // TODO:
    return `all posts with the hashtags ${tag}`;
  }
}
