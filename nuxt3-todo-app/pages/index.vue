<template>
  <div class="header">
    <h1>Nithin@Appy</h1>
    <p>My supercool Projects</p>
    <nuxt-link to="/Todo/">My Todo</nuxt-link>
  </div>
</template>
<script lang="ts" setup>
const currentDate = ref(new Date());
</script>

<style>
/* Header/Logo Title */
.header {
  padding: 60px;
  text-align: center;
  background: #00c695;
  color: white;
  font-size: 30px;
}
</style>
