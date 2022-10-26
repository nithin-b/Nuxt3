<template>
  <div class="main-div">
    <AppHeader />
    <div class="sub-div">
      <slot />
    </div>
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Caveat&family=Poppins:wght@300&display=swap");

body {
  font-family: poppins, sans-serif;
  margin: 0px;
}
.main-div {
  background-color: #e5e5e5;
}
</style>
