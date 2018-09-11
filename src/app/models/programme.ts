import { Module } from "./module";

export interface Programme {
    id: number;
    name: string;
    cover_img: any;
    programme_description: string;
    created_at: Date;
    modules: Module[]
}
