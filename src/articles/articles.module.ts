import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import Article from './article.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedsModule } from 'src/feeds/feeds.module';
import { FeedsService } from 'src/feeds/feeds.service';

@Module({
  imports: [TypeOrmModule.forFeature([Article]), FeedsModule],
  controllers: [ArticlesController],
  providers: [ArticlesService]
})
export class ArticlesModule {}
