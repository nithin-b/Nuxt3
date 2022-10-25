<template>
  <div>
    <h3 style="text-align: center">MyTodos</h3>
    <div class="legend">
      <span> <span class="incomplete-box"></span> = Incomplete </span>
      <span> <span class="complete-box"></span> = Complete </span>
    </div>
    <div class="todos">
      <div
        v-for="todo in todoStore.todos"
        :key="todo"
        class="todo"
        v-bind:class="{ 'is-complete': todo.completed }"
        @click="updateTodo(todo)"
      >
        {{ todo.title }}
        <br />
        <div>........</div>
        <div>
          <button @click="deleteTodo(todo.id)" class="danger">Delete</button>
          <button @click="updateTodo(todo)">
            <div v-if="todo.completed">Mark As InComplete</div>
            <div v-else>Mark As Complete</div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useTodoStore } from "@/store/todo";
const todoStore = useTodoStore();
// console.log(todo);
await useAsyncData(async () => {
  await todoStore.getTodos();
});
const deleteTodo = async (id) => {
  todoStore.deleteTodo(id);
};
const updateTodo = async (todo: any) => {
  const updateTodo = {
    id: todo.id,
    completed: !todo.completed,
  };

  await todoStore.updateTodo(updateTodo);
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #5e354a;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
