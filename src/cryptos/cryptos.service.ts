import {
  Injectable,
  HttpException,
  HttpStatus,
  HttpService,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CryptoEntity from './cryptos.entity';
import Crypto from './cryptos.entity';
import CreateCryptoDto from './dto/createCrypto.dto';
import ListByQuery from './dto/listByQuery.dto';
import Axios, { AxiosResponse } from 'axios';

@Injectable()
export class CryptosService {
  constructor(
    @InjectRepository(Crypto)
    private cryptosRepository: Repository<CryptoEntity>,
  ) {}

  async getCryptoByCode(code: string) {
    const cde = await this.cryptosRepository.find({ where: [{ code: code }] });
    if (cde) {
      return cde;
    }
    throw new HttpException('Crypto not found', HttpStatus.NOT_FOUND);
  }

  async getAllCrypto() {
    return this.cryptosRepository.find();
  }

  async getCryptoByQuery(code: string) {
    if (code == 'ALL') {
      return this.cryptosRepository.find();
    }
    const test = this.cryptosRepository.find({ where: [{ code: code }] });
    if (test) {
      const api_key =
        '2be8e75ff8dbc599bb9de3bd0cdeb142790ae7278b5335220c1ef54f5aec7cab';
      const api_url =
        'https://min-api.cryptocompare.com/data/v2/histoday?fsym=' +
        code +
        '&tsym=EUR&limit=1&api_key=' +
        api_key;
      const res = await Axios.get(String(api_url));
      const str_tmp = 'http://localhost:3000/cryptos/' + code;
      const tmp = await Axios.get(str_tmp);
      const curr_str =
        'https://min-api.cryptocompare.com/data/price?fsym=' +
        code +
        '&tsyms=EUR';
      const curr = await Axios.get(String(curr_str));
      const ret = new ListByQuery();

      ret.code = code;
      ret.fullname = tmp.data['0']['fullname'];
      ret.url = tmp.data['0']['url'];
      ret.highest_price = res.data['Data']['Data']['1']['high'];
      ret.lowest_price = res.data['Data']['Data']['1']['low'];
      ret.opening_price = res.data['Data']['Data']['1']['open'];
      ret.current_price = curr.data['EUR'];
      return ret;
    }
    throw new HttpException(
      'Crypto not found or defined',
      HttpStatus.NOT_FOUND,
    );
  }

  async getCryptoByPeriod(code: string, period: string) {
    if (period != 'day' && period != 'hour' && period != 'minute')
      throw new HttpException('Incorrect period', HttpStatus.NOT_FOUND);

    const api_key =
      '2be8e75ff8dbc599bb9de3bd0cdeb142790ae7278b5335220c1ef54f5aec7cab';
    let api_url =
      'https://min-api.cryptocompare.com/data/v2/histo' +
      period +
      '?fsym=' +
      code +
      '&tsym=EUR&limit=';

    if (period == 'day') api_url = api_url + '60' + '&api_key=' + api_key;
    if (period == 'hour') api_url = api_url + '48' + '&api_key=' + api_key;
    if (period == 'minute') api_url = api_url + '120' + '&api_key=' + api_key;

    const res = await Axios.get(api_url);
    return res.data['Data']['Data'];
  }

  async createCrypto(crypto: CreateCryptoDto) {
    const newCrypto = await this.cryptosRepository.create(crypto);
    await this.cryptosRepository.save(newCrypto);
    return newCrypto;
  }

  async deleteCrypto(code: string) {
    const to_delete = await this.cryptosRepository.delete({ code: code });
    if (!to_delete.affected)
      throw new HttpException('Crypto not found', HttpStatus.NOT_FOUND);
  }
}
