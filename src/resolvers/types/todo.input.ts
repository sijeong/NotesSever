import { Todo } from "../../schemas/todo.entities";
import { InputType, Field } from "type-graphql";
import { Recipe } from "../../schemas/recipe.entities";

@InputType()
export class TodoInput implements Partial<Todo>{
    @Field()
    text: string;

    @Field({ nullable: true })
    completed?: boolean
}

