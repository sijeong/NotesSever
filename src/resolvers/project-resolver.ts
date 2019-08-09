import { ProjectData, projects, tasks } from "../data"
import { Resolver, Query, FieldResolver, Args, Arg, Root } from "type-graphql";
import Project from "../schemas/project";

@Resolver(of => Project)
export default class {
    @Query(returns => Project, { nullable: true })
    projectByName(@Arg("name") name: string): ProjectData | undefined {
        return projects.find(p => p.name == name)
    }
    @FieldResolver()
    tasks(@Root() projectData: ProjectData) {
        return tasks.filter(t => {
            return t.project_id === projectData.id;
        });
    }
}