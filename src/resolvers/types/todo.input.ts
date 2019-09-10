import { Todo } from "../../schemas/todo";
import { InputType, Field } from "type-graphql";

@InputType()
export class TodoInput implements Partial<Todo>{
    @Field()
    text: string;

    @Field({ nullable: true })
    completed: boolean
}