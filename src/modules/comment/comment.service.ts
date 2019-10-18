import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './comment.entity';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity';
import { CommentDto } from './comment.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private comentRepository: Repository<Comment>,
  ) { }

  async storePostComment(id: number, user: User, data: CommentDto) {
    return await this.comentRepository.save({
      user,
      ...data,
      post: { id },
    });
  }
}
