<template>
  <nav class="nav">
    <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false">
      <el-menu-item><NuxtLink to="/">Home</NuxtLink></el-menu-item>
      <div class="flex-grow" />
      <el-menu-item><NuxtLink to="/about">About page</NuxtLink></el-menu-item>
    </el-menu>
  </nav>
</template>

<script lang="ts" setup></script>
<style>
.flex-grow {
  flex-grow: 1;
  width: 100vh;
}
.nav {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
