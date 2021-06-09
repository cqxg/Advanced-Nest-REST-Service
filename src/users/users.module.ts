import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { User } from './users.model';
import { Role } from 'src/roles/roles.model';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserRoles } from 'src/roles/user-roles.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles])
  ]
})

export class UsersModule { };
