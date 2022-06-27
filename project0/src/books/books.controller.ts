import {Body, Controller, Delete, Get, Param, Post, UseGuards} from '@nestjs/common';
import {BooksService} from "./books.service";
import {CreateBookDto} from "../users/dto/create-book.dto";
import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import {User} from "../users/users.model";
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";
import {AddRoleDto} from "../users/dto/add-role.dto";

@Controller('books')
export class BooksController {
    constructor(private bookService: BooksService) {}
    //@Roles("ADMIN", "USER")
    //@UseGuards(RolesGuard)
    @Post()
    create(@Body() dto: CreateBookDto){
        return this.bookService.addBook(dto);
    }
    @ApiOperation({summary: 'Получить все книги'})
    @ApiResponse({status: 200, type: [User]})
    @Get()
    getAll() {
        return this.bookService.getAllBooks();
    }

    @Get('/:author')
    getByAuthor(@Param('author') author: string){
        return this.bookService.getBookByAuthor(author);
    }

    @Delete(':id')
    deleteById(@Param('id') id: number){
       return this.bookService.deleteBookById(id);
   }

}