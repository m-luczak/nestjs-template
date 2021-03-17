import { Controller, Get, Post, Body, Put, Param, Delete, Req, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Observable } from 'rxjs';
import Article from './article.entity';
import { ArticlesService } from './articles.service';

@ApiTags('articles')
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articlesService.getArticleById(+id);
  }

  @Get('')
  async index(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<Pagination<Article>> {
    limit = limit > 100 ? 100 : limit;
    return this.articlesService.paginate({
      page,
      limit
    });
  }
}
