import { Controller, Post, UseGuards, UseInterceptors, ClassSerializerInterceptor, ParseIntPipe, Param, Body, Put, Delete, Get } from '@nestjs/common';
import { CommentService } from './comment.service';
import { AuthGuard } from '@nestjs/passport';
import { CommentDto } from './comment.dto';
import { User } from '../../core/decorators/user.decorators';
import { User as UserEntity } from '../user/user.entity';

@Controller()
export class CommentController {
  constructor(private commentService: CommentService) { }

  @Post('posts/:id/comments')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(ClassSerializerInterceptor)
  async storePostComment(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: CommentDto,
    @User() user: UserEntity,
  ) {
    return await this.commentService.storePostComment(id, user, data);
  }

  @Put('comments/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: CommentDto,
  ) {
    return await this.commentService.update(id, data);
  }

  @Delete('comments/:id')
  async destroy(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.commentService.delete(id);
  }

  @Get('posts/:id/comments')
  async showPostComments(@Param('id', ParseIntPipe) id: number) {
    return await this.commentService.showPostComments(id);
  }

  @Get('users/:id/comments')
  async showUserComments(@Param('id', ParseIntPipe) id: number) {
    return await this.commentService.showUserComments(id);
  }
}
