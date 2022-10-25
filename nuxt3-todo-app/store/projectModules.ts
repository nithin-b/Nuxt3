import { defineStore } from 'pinia';
export const useModuleStore = defineStore("module", {
    state: () => ({
        modules: [
            {
                name: 'Todo-App',
                path: 'todo',
                order: 1,
                img_path: 'movie_img.avif',
            },
            {
                name: 'Movie_App',
                path: 'movie',
                order: 2,
                img_path: 'panda1.avif',
            },
            {
                name: 'Movie_App',
                path: 'movie',
                order: 3,
                img_path: 'panda1.avif',
            },
            {
                name: 'Movie_App',
                path: 'movie',
                order: 3,
                img_path: 'panda1.avif',
            },
        ] as ModuleItem[],
    })

})

export interface ModuleItem {
    name: string
    path: string
    img_path: string
    query?: Record<string, any> | null
    icon: string
    order: number
}

