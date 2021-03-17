import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
class Crypto {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ unique: true })
    @ApiProperty()
    public code: string;

    @Column()
    @ApiProperty()
    public fullname: string;

    @Column()
    @ApiProperty()
    public url: string;
}

export default Crypto;
