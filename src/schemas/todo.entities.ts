import { ObjectType, Field, ID } from 'type-graphql'
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
@ObjectType()
export class Todo {
    @Field(type => ID)
    @PrimaryGeneratedColumn()
    readonly id: string;

    @Field()
    @Column()
    text: string;

    @Field()
    @Column()
    completed: boolean;
}

