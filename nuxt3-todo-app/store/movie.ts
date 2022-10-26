import { defineStore } from "pinia";
import { MovieItem, MovieResponseItem } from "@/types/movie";

export const useMovieStore = defineStore('movie', {
    state: () => ({
        movies: [] as MovieItem[],

    }),

    actions: {
        async getMovies(page: number) {
            const res = await $fetch<MovieResponseItem>(`https://api.themoviedb.org/3/movie/now_playing?api_key=37ed43a4f8eaa2abd75f9283692947bc&language=en-US&page=${page}`);
            console.log(res);
            this.movies = res.results

        }
    }
})
