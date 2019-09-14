import { Field, ID, ObjectType } from "type-graphql";
import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from "typeorm";
import { Recipe } from "./recipe.entities";
import { Lazy } from "../helpers";

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
  nickname?: string;

  @Column()
  password: string;

  @OneToMany(type => Recipe, recipe => recipe.author, { lazy: true, cascade: ["insert", "update"] })
  @Field(type => [Recipe])
  recipes: Lazy<Recipe[]>;
}
