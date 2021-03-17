import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { AuthService, Provider } from 'src/auth/google/googleAuth.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly authService: AuthService, private readonly userService: UsersService) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: 'http://localhost:3000/users/auth/google/callback',
      passReqToCallback: true,
      scope: ['email', 'profile'],
    });
  }

  async validate(
    request: any,
    accessToken: string,
    refreshToken: string,
    profile,
    done: Function,
  ) {
    try {
      console.log(profile);

      const {
        accessTokenCookie: accessTokenCookie,
        refreshTokenCookie: refreshTokenCookie
      } = await this.authService.validateOAuthLogin(
        profile.id,
        Provider.GOOGLE,
        profile,
      );

      request.res.setHeader('Set-Cookie', [
        accessTokenCookie,
        refreshTokenCookie,
      ]);
      const user = await this.userService.getByThirdPartyId(profile.id);
      /*const user = {
        jwt,
      };*/

      done(null, user);
    } catch (err) {
      // console.log(err)
      done(err, false);
    }
  }
}
