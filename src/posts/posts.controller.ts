import { Controller, Get, Req, Query } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get()
  index(@Req() request, @Query() query) {
    console.log(
      request.ip,
      request.hostname,
      request.method,
    );
    console.log(query);
    return [
      {
        title: 'hello',
      },
    ];
  }
}
