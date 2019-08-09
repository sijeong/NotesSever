import { TaskData, tasks, projects } from "../data";
import { Resolver, Query, Arg, Mutation, FieldResolver, Root } from "type-graphql";
import Task from "../schemas/task";

@Resolver(of => Task)
export default class {
    @Query(returns => [Task])
    fetchTasks(): TaskData[] {
        return tasks;
    }

    @Query(returns => Task, { nullable: true })
    getTask(@Arg("id") id: number): TaskData | undefined {
        return tasks.find(task => task.id === id);
    }

    @Mutation(returns => Task)
    markAsCompleted(@Arg("taskId") taskId: number): TaskData {
        const task = tasks.find(task => {
            return task.id === taskId;
        });
        if (!task) {
            throw new Error(`Couldn't find the task with id ${taskId}`);
        }
        if (task.completed === true) {
            throw new Error(`Task with id ${taskId} is alread completed`);
        }

        task.completed = true;
        return task;
    }

    @FieldResolver()
    project(@Root() taskData: TaskData) {
        return projects.find(project => {
            return project.id === taskData.project_id;
        });
    }
}