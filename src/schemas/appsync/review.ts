import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { AWSDateTime } from '../../scalars/AWSDateTime';
import { AWSURL } from '../../scalars/AWSURL';
import { Mall } from './mall';
import { Member } from './member';
import { Product } from './product';

// import { AWSDateTime } from "schema-ts";

@Entity()
@ObjectType()
export class Review {
    @PrimaryGeneratedColumn()
    reviewId: number;

    @Field(type => Mall)
    mall: Mall;
    // @RelationColumn()
    // mallId: number;

    @Field(type => Product)
    product: Product;
    // @RelationColumn()
    // productId: number;

    @Field(type => Member)
    member: Member;
    // @RelationColumn()
    // memberId: number;

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