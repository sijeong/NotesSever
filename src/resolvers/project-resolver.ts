import { ProjectData, projects, tasks } from "../data"
import { Resolver, Query, FieldResolver, Args, Arg, Root } from "type-graphql";
import Project from "../schemas/project";
import { InjectRepository } from "typeorm-typedi-extensions";
import { Repository } from "typeorm";
import Task from "../schemas/task";

@Resolver(of => Project)
export default class {
    constructor(
        @InjectRepository(Project) private readonly projectRepository: Repository<Project>,
        @InjectRepository(Task) private readonly taskRepository: Repository<Task>
    ) { }

    @Query()
    projects(): Promise<Project[]> {
        return this.projectRepository.find();
    }
    @Query(returns => Project, { nullable: true })
    project(@Arg("name") name: string): Promise<Project | undefined> {
        return this.projectRepository.findOne(name);
    }
    @FieldResolver()
    tasks(@Root() projectData: ProjectData) {
        return tasks.filter(t => {
            return t.project_id === projectData.id;
        });
    }
}