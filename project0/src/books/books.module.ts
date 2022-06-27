import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Book} from "./books.model";
import {User} from "../users/users.model";
import {UserBooks} from "./user-books.model";
import {UserRoles} from "../roles/user-roles.model";
import {Role} from "../roles/roles.model";

@Module({
  controllers: [BooksController],
  providers: [BooksService],
  imports: [
    SequelizeModule.forFeature([Book, User, UserBooks, Role, UserRoles])
  ],
  exports: [
    BooksService
  ]
})
export class BooksModule {}
