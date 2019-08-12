import { ObjectType } from 'type-graphql';
import { Entity } from 'typeorm';
import {} from 'uuid';
@ObjectType()
@Entity()
export class Product {
    id: string;
    name: string;
    image_path: string;
}