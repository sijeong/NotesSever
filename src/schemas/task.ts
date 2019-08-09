import Project from "./project";
import { ObjectType, Field, Int } from "type-graphql";

@ObjectType()
export default class Task{
    @Field(type => Int)
    id: number;
    @Field()
    title: string;
    @Field()
    completed: boolean;
    @Field(type => Project)
    project: Project;
}