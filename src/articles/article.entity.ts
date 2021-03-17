import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import Feed from 'src/feeds/feed.entity';

@Entity()
class Article {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  @ApiProperty()
  public title: string;

  @Column()
  @ApiProperty()
  public summary: string;

  @Column()
  @ApiProperty()
  public source: string;

  @Column()
  @ApiProperty()
  public date: Date;

  @Column()
  @ApiProperty()
  public url: string;

  @Column({ nullable: true })
  @ApiProperty()
  public image: string;

  @Column({ unique: true })
  public guid: string;
}

export default Article;
