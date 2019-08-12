import { Entity } from "typeorm";

@Entity()
export class Review{

    title: string;
    content: string;
    productId: string;
}