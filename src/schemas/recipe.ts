import { Field, ID, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";

import { Rate } from "./rate";
import { User } from "./user";
import { RelationColumn, Lazy } from "../helpers";

@Entity()
@ObjectType()
export class Recipe {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Field({})
  @Column()
  title: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  description?: string;

  @Field(type => [Rate])
  @OneToMany(type => Rate, rate => rate.recipe, { lazy: true, cascade: ["insert", "update"] })
  ratings: Lazy<Rate[]>;

  @Field(type => User)
  @ManyToOne(type => User, { lazy: true, cascade: ["insert", "update"] })
  author: Lazy<User>;
  // @RelationColumn()
  // authorId: number;
}
