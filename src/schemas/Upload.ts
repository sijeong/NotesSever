import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class File {
    @Field()
    fileName: string;
    @Field()
    mimeType: string;
    @Field()
    encoding: string;
}