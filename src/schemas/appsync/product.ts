import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Mall } from "./mall";
import { Supplier } from "./supplier";
import { ProductPrice } from "./productPrice";
import { TaxType } from "./taxType.enum";
import { AWSDateTime } from "../../scalars/AWSDateTime";

@Entity()
@ObjectType()
export class Product {
    @Field(type => ID)
    @PrimaryGeneratedColumn()
    productId: number;

    @Field(type => Mall)

    mall: Mall;

    @Field(type => Supplier)
    @ManyToMany(type => Supplier)
    supplier: Supplier;

    @Field(type => ProductPrice)
    @Column(type => ProductPrice)
    price: ProductPrice;

    @Field(type => TaxType)
    @Column()
    taxType: TaxType;

    @Field(type => AWSDateTime)
    @Column()
    createdAt: Date;

    @Field(type => AWSDateTime)
    @Column()
    updateAt: Date;
}