import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { PassportModule } from '@nestjs/passport';
import { Tag } from '../tag/tag.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post, Tag]),
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule { }
