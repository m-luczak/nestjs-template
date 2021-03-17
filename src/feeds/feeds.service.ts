import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Article from 'src/articles/article.entity';
import { Repository } from 'typeorm';
import { CreateFeedDto } from './dto/create-feed.dto';
import Feed from './feed.entity';

@Injectable()
export class FeedsService {
  constructor(
    @InjectRepository(Feed)
    private feedsRepository: Repository<Feed>,
  ) {}

  async getAllActiveFeeds() {
    const feeds =  this.feedsRepository.find({ where: [{ isActive: true }]})
    if (feeds) {
      return feeds;
    }
    throw new HttpException('Feed not found', HttpStatus.NOT_FOUND);
  }

  async getAllFeeds() {
    const feeds =  this.feedsRepository.find()
    if (feeds) {
      return feeds;
    }
    throw new HttpException('Feed not found', HttpStatus.NOT_FOUND);
  }

  async getFeedById(id: number) {
    const feed = await this.feedsRepository.findOne(id);
    if (feed) {
      return feed;
    }
    throw new HttpException('Feed not found', HttpStatus.NOT_FOUND);
  }

  async createFeed(feed: CreateFeedDto) {
    const newFeed = await this.feedsRepository.create(feed);
    await this.feedsRepository.save(newFeed);
    return newFeed;
  }

  async deleteFeed(id: number) {
    const deleteResponse = await this.feedsRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new HttpException('Feed not found', HttpStatus.NOT_FOUND);
    }
  }
}