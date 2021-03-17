import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
class Feed {
  @PrimaryGeneratedColumn()
  public id?: number;

  @ApiProperty()
  @Column({ unique: true })
  @Expose()
  public name: string;

  @ApiProperty()
  @Column()
  @Expose()
  public url: string;

  @ApiProperty()
  @Column()
  @Expose()
  public isActive: boolean;
}

export default Feed;
