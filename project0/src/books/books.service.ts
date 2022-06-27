import {Delete, HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Book} from "./books.model";
import {CreateBookDto} from "../users/dto/create-book.dto";
import {extractTypeArgumentIfArray} from "@nestjs/swagger/dist/plugin/utils/plugin-utils";

@Injectable()
export class BooksService {

    constructor(@InjectModel(Book) private bookRepository:typeof Book) {}

    async addBook(dto: CreateBookDto){
        const book = await this.bookRepository.create(dto);
        return book;
    }

    async getAllBooks(){
        const books = await this.bookRepository.findAll({include: {all: true}});
        return books;
    }

    async getBookByAuthor(author: string){
        const book = await this.bookRepository.findOne({where: {author}});
        return book;
    }
    async deleteBookById(id: number){
        const book = await this.bookRepository.findByPk(id);
        return book;
    }
}
