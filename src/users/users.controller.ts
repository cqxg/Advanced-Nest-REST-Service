import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { User } from './users.model';
import { UsersService } from './users.service';
import { AddRoleDto } from './dto/add-role.dto';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { CreateUserDto } from './dto/create-user.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { };

  @ApiOperation({ summary: 'User creation' })
  @ApiResponse({ status: 200, type: User })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  };

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: [User] })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  };

  @ApiOperation({ summary: 'Assign a role' })
  @ApiResponse({ status: 200 })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get('/role')
  addRole(@Body() dto: AddRoleDto) {
    return this.usersService.addRole(dto);
  };

};
