<template>
  <div id="example">
    <h2 id="hp" class="mt-12 ml-12 pl-16 white--text">Top Rated Movies</h2>
    <carousel-3d 
    :controls-visible="true"
    :clickable="false"
    :key="latestMovies.length"
    :listData="latestMovies"
    :height="500"
    >
    <slide :index="i" :key="i" v-for="(movie, i) in this.latestMovies">
        <figure>
          <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" />
          <figcaption>
            <v-btn id="hp2" :to="`/movie/${movie.id}`" text color="white"> {{ movie.title }}</v-btn>
          </figcaption>
        </figure>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d"
// import MovieCard from '@/components/MovieCard.vue'
export default {
  name: 'latestMovies',
  components: {
    Carousel3d,
    Slide,
    // MovieCard,
  },
  data() {
    return {
      latestMovies: []
    }
  },
  mounted() {
    this.fetchLatestMovies()
  },
  methods: {
    async fetchLatestMovies() {
      const response = await this.$http.get("https://api.themoviedb.org/3/movie/top_rated")
      this.latestMovies = response.data.results.slice(1, 11)
      console.log(this.latestMovies)
    }
  }
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