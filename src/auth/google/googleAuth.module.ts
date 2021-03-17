import { Module } from '@nestjs/common';
import { AuthController } from './googleAuth.controller';
import { AuthService } from './googleAuth.service';
import { GoogleStrategy } from '../../google.strategy';
import { JwtStrategy } from '../jwt.strategy';
import { UsersModule } from '../../users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthenticationModule } from '../authentication.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UsersModule, ConfigModule, JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy],
})
export class GoogleAuthModule {}
