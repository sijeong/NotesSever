import { ObjectType, Field } from "type-graphql";

@ObjectType()
export default class Note {
    @Field()
    id: string;
    @Field()
    title: string;
    @Field()
    content: string;
}