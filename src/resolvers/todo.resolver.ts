import { Arg, Args, Ctx, Int, Mutation, Query, Resolver } from 'type-graphql';
import { DeleteResult, getConnection, Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';

import { Todo } from '../schemas/todo.entities';
import { TodoInput } from './types/todo.input';
import { DResult } from './types/todo.output';

@Resolver(of => Todo)
export class TodoResolver {
    constructor(
        @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>
    ) { }

    @Query(returns => [Todo], { nullable: true })
    todos(): Promise<Todo[]> {
        return this.todoRepository.find();
    }

    @Query(returns => Todo, { nullable: true })
    todo(@Arg("todoId", type => Int) todoId: number) {
        return this.todoRepository.findOne(todoId);
    }

    @Mutation(returns => Todo)
    async addTodo(
        @Arg("todo") todoInput: TodoInput,
    ): Promise<Todo> {
        const todo = this.todoRepository.create({
            ...todoInput
        });

        return await this.todoRepository.save(todo);
    }



    // Is that possible to use union type???

    @Mutation(returns => DResult, { nullable: true })
    async removeTodo(
        @Arg("todoId", type => Int) todoId: number
    ): Promise<DeleteResult> {

        const result = this.todoRepository.delete(todoId)
        return await result;
    }

    @Mutation(returns => DResult, { nullable: true })
    async removeTodos(
        @Arg("ids", type => [Int]) ids: number[]
    ): Promise<DeleteResult> {
        return this.todoRepository.delete(ids);
    }
    async _addTodo() {
        await getConnection()
            .createQueryBuilder()
            .insert()
            .into(Todo)
            .values([

            ])
            .execute()
    }
    async _removeTodo() {
        await getConnection()
            .createQueryBuilder()
            .delete()
            .from(Todo)
            .where("id = :id", { id: 1 })
            .execute();
    }
}