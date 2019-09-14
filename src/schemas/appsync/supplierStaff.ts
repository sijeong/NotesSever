import { ObjectType, Field } from "type-graphql";
import { Entity, Column } from "typeorm";
import { AWSPhone } from "../../scalars/AWSPhone";
import { AWSEmail } from "../../scalars/AWSEmail";

@Entity()
@ObjectType()
export class SupplierStaff {
    @Field()
    @Column()
    name: string;
    @Field(type => AWSPhone)
    @Column()
    phone: string;
    @Field(type => AWSEmail)
    @Column()
    email: string;
}