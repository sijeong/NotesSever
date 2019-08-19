import { SupplierStaff } from "../../schemas/appsync/supplierStaff";
import { InputType, Field } from "type-graphql";
import { AWSPhone } from "../../scalars/AWSPhone";
import { AWSEmail } from "schema-ts";

@InputType()
export class StaffInput implements Partial<SupplierStaff>{
    @Field()
    name: string
    @Field(type => AWSPhone)
    phone: string
    @Field(type => AWSEmail)
    email: string
}