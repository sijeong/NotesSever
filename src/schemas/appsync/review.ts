import { Mall } from "./mall";
import { Product } from "./product";
import { Member } from "./member";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { RelationColumn } from "../../helpers";
import { AWSURL } from "../../scalars/AWSURL";
import { AWSDateTime } from "schema-ts";

@Entity()
@ObjectType()
export class Review {
    @PrimaryGeneratedColumn()
    reviewId: number;

    @Field(type => Mall)
    mall: Mall;
    @RelationColumn()
    mallId: number;

    @Field(type => Product)
    product: Product;
    @RelationColumn()
    productId: number;

    @Field(type => Member)
    member: Member;
    @RelationColumn()
    memberId: number;

    @Field()
    @Column()
    rating: number;

    @Field()
    @Column()
    content: string;

    @Field(type => [AWSURL])
    @Column()
    images: [string];

    @Field(type => AWSDateTime)
    @Column()
    createdAt: Date;

    @Field(type => AWSDateTime)
    @Column()
    updatedAt: Date;
}