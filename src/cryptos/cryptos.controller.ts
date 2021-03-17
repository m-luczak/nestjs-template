import {
  Controller,
  Get,
  Post,
  Delete,
  UseGuards,
  Body,
  Param,
  Query,
  HttpService,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CryptosService } from './cryptos.service';
import CreateCryptoDto from './dto/createCrypto.dto';
import ListByQuery from './dto/listByQuery.dto';
import JwtAuthenticationGuard from '../auth/jwt-authentication.guard';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { Http2ServerRequest } from 'http2';

@ApiTags('cryptos')
@Controller('cryptos')
export default class CryptosController {
  constructor(private readonly cryptosService: CryptosService) {}

  @Get(':code')
  getCryptoByCode(@Param() { code }) {
    return this.cryptosService.getCryptoByCode(String(code));
  }

/*  @Get()
  findByQuery(@Query() query: ListByQuery) {
    return this.cryptosService.getCryptoByQuery(query.code);
  }*/

  @Get()
  find() {
    return this.cryptosService.getAllCrypto();
  }

  @Get(':code/history/:period')
  getCryptoByPeriod(@Param() { code }, @Param() { period }) {
    return this.cryptosService.getCryptoByPeriod(String(code), String(period));
  }

  @Post()
  //    @UseGuards(JwtAuthenticationGuard)
  async createCrypto(@Body() crypto: CreateCryptoDto) {
    return this.cryptosService.createCrypto(crypto);
  }

  @Delete(':code')
  async deleteCrypto(@Param('code') code: string) {
    this.cryptosService.deleteCrypto(String(code));
  }
}
