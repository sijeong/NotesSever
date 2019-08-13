import { ObjectType, Field } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Recipe {
    @Field()
    @PrimaryGeneratedColumn()
    readonly id: number;

    
}