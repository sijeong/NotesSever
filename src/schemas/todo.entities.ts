import { ObjectType, Field, ID } from 'type-graphql'
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'
import { TodoTypes } from './appsync/todo.Types.enum';
import { Length } from 'class-validator';

@Entity()
@ObjectType()
export class Todo {
    @Field(type => ID)
    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Field()
    @Column({type: "enum", enum: TodoTypes, default: TodoTypes.Private})
    category: TodoTypes
    
    @Field()
    @Column()
    @Length(30) // test with length constraint
    text: string;

    @Field()
    @Column()
    completed: boolean;

    @Field()
    @CreateDateColumn()
    completedDate: Date;
}

