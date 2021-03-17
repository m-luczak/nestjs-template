import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthenticationModule } from './auth/authentication.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CryptosModule } from './cryptos/cryptos.module';
import { ArticlesModule } from './articles/articles.module';
import * as ormconfig from './ormconfig';
import { GoogleAuthModule } from './auth/google/googleAuth.module';
import { DiscordAuthModule } from './auth/discord/discord.auth.module';
import { FeedsModule } from './feeds/feeds.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(ormconfig),
    AuthenticationModule,
    UsersModule,
    CryptosModule,
    DiscordAuthModule,
    ArticlesModule,
    FeedsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
