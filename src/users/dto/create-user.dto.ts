import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: 'user@yandex.ru', description: 'email' })
  readonly email: string;

  @ApiProperty({ example: '1234567890', description: 'password' })
  readonly password: string;
};