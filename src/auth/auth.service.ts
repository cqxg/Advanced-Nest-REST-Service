import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { User } from 'src/users/users.model';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {

  constructor(private userService: UsersService,
    private jwtService: JwtService) { }

  async generateToken(user: User) {
    const payload = { email: user.email, id: user.id, roles: user.roles }

    return {
      token: this.jwtService.sign(payload)
    }
  }

  async login(userDto: CreateUserDto) {
  }

  async registration(userDto: CreateUserDto) {
    const candidate = await this.userService.getUserByEmail(userDto.email);
    if (candidate) throw new HttpException('User with this email already exists', HttpStatus.BAD_REQUEST);
    const hashPassword = await bcrypt.hash(userDto.password, 5);
    const user = await this.userService.createUser({ ...userDto, password: hashPassword });

    return this.generateToken(user)
  }
}
