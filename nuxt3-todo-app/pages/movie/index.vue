<template>
  <div>
    <div class="main-div">
      <div class="back-btn">
        <el-button @click="$router.back()" icon="el-icon-back" type="primary">
          > back</el-button
        >
      </div>
      <div>
        <h3 class="title">Movie Module:</h3>
      </div>
    </div>
    <div class="todos">
      <div v-for="movie in movieStore.movies" :key="movie.id" class="todo">
        <div class="movie-img">
          <img
            :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
            alt=""
          />
          <p class="review">{{ movie.vote_average }}</p>
          <p class="overview">{{ movie.overview }}</p>
        </div>
        <h3>{{ movie.title }}</h3>
        <br />
        <NuxtLink class="button button-light"> Get More Info </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useMovieStore } from "@/store/movie";
const movieStore = useMovieStore();
const searchInput = ref("");
// if (this.searchInput !== "") {
//   await this.searchMovies();
// }
useAsyncData(async () => {
  await movieStore.getMovies();
});
</script>
<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #ffffff;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
}
.button {
  margin-top: 8px;
}
.search {
  display: flex;
  padding: 32px 16px;
}
input {
  max-width: 350px;
  width: 100%;
  padding: 12px 6px;
  font-size: 14px;
  border: none;
}
input:focus {
  outline: none;
}
.button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.title {
  text-align: center;
  padding-top: 15px;
}
.main-div {
  display: flex;
  margin-top: 5%;
  align-items: center;
}
.back-btn {
  padding: 10px;
  width: 40%;
}
.movie-img {
  position: relative;
  overflow: hidden;
}
.movie-img :hover {
  transform: translateY(0);
}

img {
  display: block;
  width: 100%;
  height: 100%;
}
.review {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #c92502;
  color: #fff;
  border-radius: 0 0 16px 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.overview {
  line-height: 1.5;
  position: absolute;
  bottom: 0;
  background-color: rgba(201, 38, 2, 0.9);
  padding: 12px;
  color: #fff;
  transform: translateY(100%);
  transition: 0.3s ease-in-out all;
}
.overview :hover {
  transform: translateY(0);
}
</style>
