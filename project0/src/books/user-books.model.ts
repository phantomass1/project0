import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";
import {Book} from "./books.model";


@Table({tableName: 'user_books', createdAt: false, updatedAt: false})
export class UserBooks extends Model<UserBooks>{

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Book)
    @Column({type: DataType.INTEGER})
    bookId: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;


}