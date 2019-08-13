
import { getRepository, ColumnOptions, Column } from 'typeorm';

import { } from 'schema-ts';

// import {Graphqli} from 'graphql';

import Task from './schemas/task';
import Project from './schemas/project';
import { Vendor } from './schemas/vendor';

export async function seedDatabase() {
    const vendorRepository = getRepository(Vendor);
    const taskRepository = getRepository(Task);
    const projectRepository = getRepository(Project);
    const defaultVendor = vendorRepository.create({
        id: 1,
        name: "defaultVendor"
    })
    const defaultProject = projectRepository.create({
        id: 1,
        name: "myTask"
    })

    await projectRepository.save(defaultProject);

    const tasks = taskRepository.create([
        {
            id: 1,
            title: "",
            completed: false,
            project: defaultProject
        }
    ])

    await taskRepository.save(tasks);

    return {
        // defaultProject,
        defaultVendor
    }


}

export function RelationColumn(options?: ColumnOptions) {
    return Column({ nullable: true, ...options });
}