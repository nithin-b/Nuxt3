<template>
  <div class="add">
    <h3>Add Todo</h3>
    <div>
      <form @submit.prevent="onSubmit">
        <input type="text" v-model="title" placeholder="Add Todo..." />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useTodoStore } from "@/store/todo";
const todosStore = useTodoStore();
const title = ref("");
const onSubmit = () => {
  todosStore.addTodo(title.value);
  this.title = " ";
};
</script>
<style scoped>
.add {
  padding: 20px;
  margin-top: 5%;
}
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>
