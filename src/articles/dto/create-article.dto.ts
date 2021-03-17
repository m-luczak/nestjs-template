import { ApiProperty } from "@nestjs/swagger";
import Feed from "src/feeds/feed.entity";

class CreateArticleDto {

  @ApiProperty()
  title: string;

  @ApiProperty()
  summary: string;

  @ApiProperty()
  source: string;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  url: string;

  @ApiProperty()
  image: string;

  guid: string;
}

export default CreateArticleDto;