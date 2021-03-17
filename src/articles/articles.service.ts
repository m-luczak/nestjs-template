import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import Article from './article.entity';
import CreateArticleDto from './dto/create-article.dto';
import Parser from 'rss-parser';
import { paginate, Pagination, IPaginationOptions} from 'nestjs-typeorm-paginate';
import { FeedsService } from 'src/feeds/feeds.service';


@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private articlesRepository: Repository<Article>,
    private readonly feedsService: FeedsService,
  ) {}

  async getArticleById(id: number) {
    await this.retrieveArticlesFromFeeds();
    const article = await this.articlesRepository.findOne(id);
    if (article) {
      return article;
    }
    throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
  }

  async createArticle(article: CreateArticleDto) {
    const newArticle = await this.articlesRepository.create(article);
    await this.articlesRepository.save(newArticle);
    return newArticle;
  }

  async deleteArticle(id: number) {
    const deleteResponse = await this.articlesRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
    }
  }

  async retrieveArticlesFromFeeds() {
    let Parser = require('rss-parser');
    let parser = new Parser();
    let feeds = await this.feedsService.getAllActiveFeeds();

    for (let feed of feeds) {
      let feedUrl = await parser.parseURL(feed.url);
      
      for (let item of feedUrl.items) {
        const imageMatch = item.content.match(/<img.*src="(.*?)"/);
        let image = null;
        if(imageMatch != null) {
          image = imageMatch[1];
        }
        let article = {
          title: item.title,
          summary: item.contentSnippet,
          source: item.creator,
          date: item.isoDate,
          url: item.link,
          image: image,
          guid: item.guid,
          feed: feed
        }
        this.createArticle(article)
      }
    }
  }

  async paginate(options: IPaginationOptions): Promise<Pagination<Article>> {
    await this.retrieveArticlesFromFeeds();
    return paginate<Article>(this.articlesRepository, options);
  }
}
