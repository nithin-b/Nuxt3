import { defineStore } from 'pinia';
import { Todo } from '@/types/todo';

export const useTodoStore = defineStore("todo", {
    state: () => ({
        todos: [] as Todo[]
    }),
    actions: {
        async getTodos() {
            const res = await $fetch<Todo>('https://jsonplaceholder.typicode.com/todos')
            this.todos = res
        },
        async deleteTodo(id:number) {
            const res = await $fetch<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`,{method:'DELETE'})
            this.todos = this.todos.filter((todo: { id: number; }) => todo.id !== id)
        }
    }
})
