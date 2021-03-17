import { IsEmail, IsString, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterOAuthDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  oAuthId: string;
}

export default RegisterOAuthDto;
