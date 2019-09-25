import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@Entity()
@ObjectType()
export class File {
    @Field(type => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field()
    @Column()
    path: string;

    @Field()
    @Column()
    filename: string;

    @Field()
    @Column()
    minetype: string;

}