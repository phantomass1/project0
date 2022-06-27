import {BelongsTo, BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";
import {UserRoles} from "./user-roles.model";
import {UserBooks} from "../books/user-books.model";
import {Book} from "../books/books.model";

interface RoleCreationAttrs{
    value: string;
    description: string;
}

@Table({tableName: 'roles'})
export class Role extends Model<Role,RoleCreationAttrs >{
    @ApiProperty({example: '1', description: `unique id`})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'ADMIN', description: `user's unique role`})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;

    @ApiProperty({example: 'Administrator', description: `Role's description`})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    description: string;

    @BelongsToMany(() => User,() => UserRoles)
    users: User[];




}