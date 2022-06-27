import {forwardRef, Module} from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./users.model";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";
import {RolesModule} from "../roles/roles.module";
import {AuthModule} from "../auth/auth.module";
import {UserBooks} from "../books/user-books.model";
import {Book} from "../books/books.model";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports:[
      SequelizeModule.forFeature([User, Role, Book, UserRoles, UserBooks]),
      RolesModule,
      forwardRef(() => AuthModule)
  ],
    exports: [
        UsersService
    ]
})
export class UsersModule {}
