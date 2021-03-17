import { HttpModule, Module } from '@nestjs/common';
import { AuthService } from './discord.auth.service';
import { UsersModule } from '../../users/users.module';
import { AuthController } from './discord.auth.controller';
import { DiscordStrategy } from './discord.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UsersModule, HttpModule, ConfigModule, JwtModule.register({})],
  providers: [AuthService, DiscordStrategy],
  controllers: [AuthController],
})
export class DiscordAuthModule {}
