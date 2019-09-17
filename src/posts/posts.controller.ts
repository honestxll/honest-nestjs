import { Controller, Get, Req, Query, Headers, Param, Post, Body } from '@nestjs/common';
import { CreatePostDto } from './post.dto';

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

  @Get(':id')
  show(@Param() params) {
    return {
      title: `Post ${params.id}`,
    };
  }

  @Post()
  store(@Body() post: CreatePostDto) {
    return post;
  }
}
