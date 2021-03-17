import { Module } from '@nestjs/common';
import { CryptosService } from './cryptos.service';
import CryptosController from './cryptos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Crypto from './cryptos.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Crypto])],
    providers: [CryptosService],
//    exports: [CryptosService],
    controllers: [CryptosController],
})
export class CryptosModule {}
