import { DeleteResult, UpdateResult, ObjectLiteral } from "typeorm";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class DResult extends DeleteResult {
    
    @Field()
    affected?: number;

}

@ObjectType()
export class UResult extends UpdateResult {
    @Field()
    affected?: number;
}
