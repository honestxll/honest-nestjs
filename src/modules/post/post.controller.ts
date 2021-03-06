import { Controller, Post, Body, Get, Param, Put, Delete, UseInterceptors, ClassSerializerInterceptor, UseGuards, ParseIntPipe, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { PostDto } from './post.dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../../core/decorators/user.decorators';
import { User as UserEntity } from '../user/user.entity';
import { ListOptions } from '../../core/decorators/list-options.decorator';
import { ListOptionsInterface } from '../../core/interfaces/list-options.interface';
import { TransformInterceptor } from '../../core/interceptors/transform.interceptor';

@Controller('posts')
export class PostController {
  constructor(
    private readonly postService: PostService,
  ) { }

  @Post()
  @UseGuards(AuthGuard())
  async store(@Body() data: PostDto, @User() user: UserEntity) {
    return await this.postService.store(data, user);
  }

  @Get()
  @UseInterceptors(ClassSerializerInterceptor, TransformInterceptor)
  async index(
    @ListOptions({ sort: 'updated', order: 'DESC', limit: 10 }) options: ListOptionsInterface,
  ) {
    return await this.postService.index(options);
  }

  @Get(':id')
  async show(@Param('id') id: string) {
    return await this.postService.show(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Partial<PostDto>) {
    return await this.postService.update(id, data);
  }

  @Delete(':id')
  async destroy(@Param('id') id: string) {
    return await this.postService.destroy(id);
  }

  @Post(':id/vote')
  @UseGuards(AuthGuard())
  async vote(
    @Param('id', ParseIntPipe) id: number,
    @User() user: UserEntity,
    @Query('method') method: string,
  ) {
    if (method === 'delete') {
      return await this.postService.unVote(id, user);
    }
    return await this.postService.vote(id, user);
  }

  @Delete(':id/vote')
  @UseGuards(AuthGuard())
  async unVote(
    @Param('id', ParseIntPipe) id: number,
    @User() user: UserEntity,
  ) {
    return await this.postService.unVote(id, user);
  }

  @Get(':id/liked')
  @UseInterceptors(ClassSerializerInterceptor)
  async liked(@Param('id', ParseIntPipe) id: number) {
    return await this.postService.liked(id);
  }
}
