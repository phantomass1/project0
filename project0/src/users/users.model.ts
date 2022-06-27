import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";
import {UserBooks} from "../books/user-books.model";
import {Book} from "../books/books.model";

interface UserCreationAttrs{
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User,UserCreationAttrs >{
    @ApiProperty({example: '1', description: `user's unique id`})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'user@gmail.com', description: `user's unique email`})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;
    @ApiProperty({example: 'qwerty123', description: `user's password`})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @BelongsToMany(() => Role, ()=> UserRoles)
    roles: Role[];

    @BelongsToMany(() => Book, ()=> UserBooks)
    books: Book[];


}