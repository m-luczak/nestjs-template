import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { FeedsService } from './feeds.service';
import { CreateFeedDto } from './dto/create-feed.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('feeds')
@Controller('feeds')
export class FeedsController {
  constructor(private readonly feedsService: FeedsService) {}

  @Post()
  create(@Body() createFeedDto: CreateFeedDto) {
    return this.feedsService.createFeed(createFeedDto);
  }

  @Get()
  findAll() {
    return this.feedsService.getAllFeeds();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.feedsService.getFeedById(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.feedsService.deleteFeed(+id);
  }
}
