import { DeleteResult } from "typeorm";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class DResult extends DeleteResult {
    
    @Field()
    affected?: number;

}