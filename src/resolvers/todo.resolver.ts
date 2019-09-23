import { Arg, Args, Ctx, Int, Mutation, Query, Resolver, ID } from 'type-graphql';
import { DeleteResult, getConnection, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';

import { Todo } from '../schemas/todo.entities';
import { TodoInput } from './types/todo.input';
import { DResult, UResult } from './types/todo.output';

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
    todo(@Arg("todoId", type => ID) todoId: string) {
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


    @Mutation(returns => UResult, { nullable: true })
    async updateTodo(
        @Arg("todo") todo: TodoInput
    ): Promise<UpdateResult> {
        return this.todoRepository.update(todo.id, todo)
    }

    // Is that possible to use union type???

    @Mutation(returns => DResult, { nullable: true })
    async removeTodo(
        @Arg("todoId", type => ID) todoId: string
    ): Promise<DeleteResult> {
        return await this.todoRepository.delete(todoId)
    }

    @Mutation(returns => DResult, { nullable: true })
    async removeTodos(
        @Arg("ids", type => [ID]) ids: string[]
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