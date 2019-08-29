import { ObjectType, Field, ID } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import { Mall } from './mall';
import { AWSDateTime } from '../../scalars/AWSDateTime';
import { AWSPhone } from '../../scalars/AWSPhone';
import { RelationColumn } from '../../helpers';

@Entity()
@ObjectType()
export class Supplier {
    @Field(type => ID)
    @PrimaryGeneratedColumn()
    supplierId: number;

    @Field(type => Mall)
    @Column()
    mall: Mall;
    // @RelationColumn()
    // mallId: number;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    businessOwnerName: string;

    @Field(type => AWSPhone)
    @Column()
    phone: string; // change to AWSPhone

    @Field(type => AWSDateTime)
    @CreateDateColumn()
    createdAt: Date;
}