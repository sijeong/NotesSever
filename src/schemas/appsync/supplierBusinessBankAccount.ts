import { Entity } from "typeorm";
import { ObjectType } from "type-graphql";

@Entity()
@ObjectType()
export class SupplierBusinessBankAccount {
    bankName: string;
    ownerName: string;
    accountNumber: string;
}