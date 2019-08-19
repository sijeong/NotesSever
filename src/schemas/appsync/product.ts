import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Mall } from "./mall";
import { Supplier } from "./supplier";
import { ProductPrice } from "./productPrice";
import { TaxType } from "./taxType.enum";
import { AWSDateTime } from "../../scalars/AWSDateTime";
import { ProductStatus } from "./productStatus.enum";
import { RelationColumn } from "../../helpers";

@Entity()
@ObjectType()
export class Product {
    @Field(type => ID)
    @PrimaryGeneratedColumn()
    productId: number;

    @Field(type => Mall)
    @ManyToOne(type => Mall)
    mall: Mall;
    @RelationColumn()
    mallId: number;

    @Field()
    @Column()
    productName: string;

    status: ProductStatus;

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