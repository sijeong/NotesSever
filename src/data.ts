import { Product } from "schema-ts";

export interface ProjectData {
    id: number;
    name: string;
}

export interface TaskData {
    id: number;
    title: string;
    completed: boolean;
    project_id: number;
}

export interface NoteData {
    id: string;
    title: string;
    content: string;
}

export const projects: ProjectData[] = [
    { id: 1, name: "Learn React Native" },
    { id: 2, name: "Workout" },
]

export const tasks: TaskData[] = [
    { id: 1, title: "Install Node", completed: true, project_id: 1 },
    { id: 2, title: "Install React Native CLI:", completed: false, project_id: 1 },
    { id: 3, title: "Install Xcode", completed: false, project_id: 1 },
    { id: 4, title: "Morning Jog", completed: true, project_id: 2 },
    { id: 5, title: "Visit the gym", completed: false, project_id: 2 }
]

export const notes: NoteData[] = [
    {id: "a000001", title: "Monday", content: ""},
    {id: "a000002", title: "Wednesday", content: "Rose"},
    {id: "a000003", title: "Friday", content: ""},
]

export const products: Product[] = [
    {id: "a000001", name: "Monday", image_url: ""},
    {id: "a000002", name: "Wednesday", image_url: "Rose"},
    {id: "a000003", name: "Friday", image_url: ""},
]