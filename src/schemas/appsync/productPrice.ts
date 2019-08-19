import { ObjectType, Field, Int } from "type-graphql";
import { Entity, Column } from "typeorm";

@Entity()
@ObjectType()
export class ProductPrice {
    @Field(type => Int)
    @Column()
    openMarketPrice: number;
    
    @Field(type => Int)
    @Column()
    openMarketMinimumPrice: number;
    
    @Field(type => Int)
    @Column()
    purchasePrice: number;
    
    @Field(type => Int)
    @Column()
    memberPrice: number;
    
    @Field(type => Int)
    @Column()
    distributionPrice: number;
    
    @Field(type => Int)
    @Column()
    pvPrice: number;
}