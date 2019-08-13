import { Field, Int, ObjectType } from "type-graphql"
import Task from "./task";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
@ObjectType()
export default class Project {
    @Field(type => Int)
    @PrimaryGeneratedColumn()
    id: number;
    
    @Field()
    @Column()
    name: string;

    @Field(type => [Task])
    @Column()
    tasks: Task[];
}