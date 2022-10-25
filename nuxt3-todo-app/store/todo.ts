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
        async deleteTodo(id: number) {
            console.log(id);
            const res = await $fetch<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, { method: 'DELETE' })
            this.todos = this.todos.filter((todo: { id: number; }) => todo.id !== id)
        },
        async addTodo(title: string) {
            const res = await $fetch<Todo>('https://jsonplaceholder.typicode.com/todos', {
                method: "POST",
                body: {
                    title: title
                }
            })
            this.todos.unshift(res);
            
        },
         async updateTodo(updateTodo:any) {
                        const response = await $fetch<Todo> (
                `https://jsonplaceholder.typicode.com/todos/${updateTodo.id}`,
                {
                    method: "PUT", body: {
                    title:updateTodo.title,
                    completed:updateTodo.completed
                    }
                }
                 )       
    var index = this.todos.findIndex((todo: { id: any; }) => todo.id === updateTodo.id) 
    if(index !== -1){
      this.todos.splice(index,1,updateTodo)
    }
   },
    }
})
