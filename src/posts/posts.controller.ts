import { Controller, Get, Req, Query, Headers } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get()
  index(@Req() request, @Query() query, @Headers() headers) {
    console.log(
      request.ip,
      request.hostname,
      request.method,
    );
    console.log(query);
    console.log(headers);
    return [
      {
        title: 'hello',
      },
    ];
  }
}
