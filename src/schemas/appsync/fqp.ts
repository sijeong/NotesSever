import { Mall } from "./mall";
import { AWSDateTime } from "schema-ts";

export class Faq{
    faqId: number;
    mall: Mall;
    title: string;
    content: string;

    createdAt: Date;
    updatedAt: Date;
}