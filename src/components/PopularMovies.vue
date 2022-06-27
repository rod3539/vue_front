<template>
  <div class="mx-3">
    <h2 id="hp" class="mt-12 ml-12 pl-16 white--text"> Popular Movies</h2>
    <carousel-3d 
    :controls-visible="true"
    :clickable="false"
    :key="popularMovies.length"
    :listData="popularMovies"
    :height="500"
    >
    <slide :index="i" :key="i" v-for="(movie, i) in this.popularMovies">
      <figure>
        <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" />
        <figcaption>
          <v-btn id="hp2" :to="`/movie/${movie.id}`" text color="white"> {{ movie.title }}</v-btn>
        </figcaption>
      </figure>
    </slide>
    </carousel-3d>
    <!-- <v-container fluid>
      <v-row>
        <v-col cols="12" sm="3" v-for="movie in movies" :key="movie.id">
          <MovieCard :movie="movie" :genres="genres"/>
        </v-col>
      </v-row>
    </v-container>   -->
  </div>  
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d"
// import MovieCard from '@/components/MovieCard.vue'
export default {
  name: 'popularMovies',
  components: {
    Carousel3d,
    Slide,
    // MovieCard,
  },
  data() {
    return {
      popularMovies: []
      // movies: [],
      // genres: [],
    }
  },
  mounted() {
    this.fetchPopularMovies()
  },
  methods: {
    async fetchPopularMovies() {
      const response = await this.$http.get("https://api.themoviedb.org/3/movie/popular")
      this.popularMovies = response.data.results.slice(1, 11)
      console.log(this.popularMovies)
    }
  }
  // async mounted() {
  //   this.fetchGenres()
  //   try {
  //     const response = await this.$http.get("/movie/popular")
  //     this.movies = response.data.results
  //   } catch(error){
  //     console.log(error) 
  //   }
  // },
  // methods: {
  //   async fetchGenres() {
  //     try {
  //       const response = await this.$http.get("/genre/movie/list")
  //       this.genres = response.data.genres
  //     }catch(error) {
  //       console.log(error)
  //     }
  //   }
  // }
}
</script>

<style>
@import url('http://fonts.cdnfonts.com/css/harry-potter');
@import url('http://fonts.cdnfonts.com/css/harrypotter7');

.carousel-3d-container figure {
  margin: 0;
}
.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}
.next span,
.prev span {
  color: red;
}
#hp {
  font-family: 'Harry Potter', sans-serif !important;
  font-size: 2rem;
}
#hp2 {
  font-family: 'Harry Potter', sans-serif !important;
  font-size: 1rem;
}
</style>