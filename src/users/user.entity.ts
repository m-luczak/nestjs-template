import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id?: number;

  @ApiProperty()
  @Column({ nullable: true })
  @Expose()
  public oAuthId: string;

  @ApiProperty()
  @Column({ unique: true })
  @Expose()
  public email: string;

  @ApiProperty()
  @Column({
    nullable: true,
  })
  @Exclude()
  public currentHashedRefreshToken?: string;

  @ApiProperty()
  @Column()
  @Expose()
  public name: string;

  @ApiProperty()
  @Column()
  public password: string;

  @ApiProperty()
  @Column({ nullable: true })
  @Expose()
  public role: string;
}

export default User;
