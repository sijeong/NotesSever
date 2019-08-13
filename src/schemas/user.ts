import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
@Entity()
export class User {
    @Field(type => ID)
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Field()
    @Column()
    email: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    namename?: string;

    @Column()
    password: string;
}