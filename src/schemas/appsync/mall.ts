import { ObjectType, Field, ID } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { AWSDateTime } from '../../scalars/AWSDateTime';
// import { AWSDateTime } from 'schema-ts';

@Entity()
@ObjectType()
export class Mall {
    @Field(type => ID)
    @PrimaryGeneratedColumn()
    readonly mallId: number;

    @Field()
    @Column()
    mallName: string;

    @Field(type => AWSDateTime)
    @Column()
    createdAt: Date;

    @Field(type => AWSDateTime)
    @Column()
    updatedAt: Date;
}