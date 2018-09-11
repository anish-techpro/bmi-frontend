import { Course } from "./course";

export interface Module {
    id: number;
    name: string;
    description: string;
    courses: Course[];
}
