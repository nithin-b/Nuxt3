<template>
  <div>
    <div class="header">
      <h1>Nithin@Appy</h1>
      <p>My Nuxt3 Projects</p>
    </div>
    <br />
    <div class="todos">
      <div v-for="module in module.modules" :key="module.id" class="todo">
        <h3 class="sub-head">{{ module.name }}</h3>
        <nuxt-link :to="{ path: '/' + module.path, query: module.query }"
          >View Module</nuxt-link
        >
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useModuleStore } from "@/store/projectModules";
const module = useModuleStore();
</script>

<style>
/* Header/Logo Title */
.header {
  padding: 60px;
  text-align: center;
  background: #14213d;
  color: #e5e5e5;
  font-size: 30px;
  margin-top: 5%;
}
.sub-head {
  color: #14213d;
}
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #e5e5e5;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
</style>
