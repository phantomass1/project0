import {BelongsTo, BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";
import {UserBooks} from "./user-books.model";

interface BookCreationAttrs{
    author: string;
    genre: string;
}

@Table({tableName: 'books'})
export class Book extends Model<Book,BookCreationAttrs >{
    @ApiProperty({example: '1', description: `unique id`})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Jack London', description: `Author`})
    @Column({type: DataType.STRING,allowNull: false})
    author: string;

    @ApiProperty({example: 'novel', description: `Book's genre`})
    @Column({type: DataType.STRING, allowNull: false})
    genre: string;

    @BelongsToMany(() => User,() => UserBooks)
    users: User[];

}