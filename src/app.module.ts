import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';

@Module({
    controllers: [],
    providers: [],
    imports: [
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
            port: 5433,
            username: 'postgres',
            password: 'root',
            database: 'nest-examples',
            models: [],
            autoLoadModels: true
        }),
        UsersModule,
    ]
})

export class AppModule { }