<template>
  <div>
    <v-img
    :src="require('@/assets/WallpaperDog-2322.jpg')"
    height="1700"
    class="white--text"
    gradient="to bottom, rgba(11, 28, 30, .9), rgba(0,0,0,0)"
    >
    <v-container class="mt-16">
      <v-row>
        <v-col cols="12" sm="4">
          <v-hover
            v-slot="{ hover }"
            open-delay="200"
            >
            <v-card 
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }">
              <router-link :to="`/movie/${movie.id}`">
                <v-img :src="posterPath" alt="" class=""/>
              </router-link> 
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="8">
          <h1 id="hp1" class="white--text text-darken-3 mt-5">{{this.movie.title}}</h1>
          <v-row>
            <v-col cols="12" sm="3">
              <v-rating
              :value="movie.vote_average / 2"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
              >
              </v-rating>
            </v-col>
            <v-col cols="12" sm="3">
                <span id="hp3" class="white--text ml-n7">
                    {{movie.vote_average * 10}}% | {{movie.release_date}}
                </span>
            </v-col>
            <v-col cols="12" sm="6" class="hidden-md-and-down">
              <div class="subtitle-2 white--text ml-n16">
                <span id="hp3" v-for="(item, index) in movie.genres" :key="index" class="ml-1">
                  {{item.name}}
                  <span v-if="(movie.genres.length - 1 != index)">,</span>
                </span> 
              </div>
            </v-col>
          </v-row>
          <hr>
          <br>
          <div>
            <p id="hpsub" class="white--text">overview</p>
            <p class="mt-5 white--text text--darken-3 subheader">{{this.movie.overview}}</p>
          </div>
          <div class="mt-5">
            <p id="hpsub" class="mt-5 white--text text--darken-3">Featured Cast</p>
            <div :key="index" v-for="(crew, index) in movie.credits.crew" class="mt-5">
                <div v-if="index < 2" class="">
                  <div id="hp3" class="white--text">{{crew.job}}</div>
                  <span class="white--text">{{crew.name}}</span>
                </div>
            </div>
          </div>
            <v-dialog
            v-model="dialog"
            persistent
            max-width="800px"
            >
              <template v-slot:activator="{on, attrs}">
                <v-btn id="hp2" tile color="error" v-bind="attrs" v-on="on" @click.prevent="openYouTubeModel">
                  <v-icon left>mdi-play</v-icon>Play
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                    <span class="headline">{{this.movie.title}}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="">
                        <div class="iframe-container">
                          <img :src="mediaURL" v-if="!isVideo" />
                          <iframe allowfullscreen v-if="isVideo" :src="mediaURL"></iframe>
                        </div>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" text @click="dialog = flase">Close</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
      <!-- <v-divider class="mt-2"></v-divider>
         <MovieCast :casts="movie.credits.cast"/>
         <v-divider class="mt-2"></v-divider>
         <Images :images="movie.images.backdrops" /> -->
        <v-divider class="mt-2"></v-divider>
        <h2 id="hp1" class="mt-16 mb-8 white--text text-center"> Similar Movies</h2>
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
              <v-btn class="d-flex justify-content" id="hp3" :to="`/movie/${movie.id}`" color="cyan">{{ movie.title }}</v-btn>
            </figcaption>
          </figure>
        </slide>
        </carousel-3d>
        </v-container>
    </v-img>
      </div>
</template>

<script>
// import MovieCast from '@/components/MovieCast.vue'
import { Carousel3d, Slide } from "vue-carousel-3d"
export default {
  components: {
    // MovieCast
    Carousel3d,
    Slide,
  },
  data() {
    return {
      movie: {
        credits: {
          crew: {},
        },
        images: {
          backdrops: {},
        },
      },
      isVideo: false,
      mediaURL: "",
      dialog: false,
      popularMovies: []
    }
  },
  mounted() {
    this.fetchMovie(this.$route.params.id)
    this.fetchPopularMovies(this.$route.params.id)
  },
   watch: {
    "$route.params.id": {
      handler() {
        this.fetchMovie(this.$route.params.id);
      },
      immediate: true,
    },
  },
   computed: {
    posterPath() {
      return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path
    },
  },
  methods: {
    async fetchMovie(movieId) {
      const response = await this.$http.get(
        "/movie/" + movieId + "?append_to_response=credits,videos,images"
      );
      this.movie = response.data
    },

    openYouTubeModel() {
      this.mediaURL = this.youtubeVideo()
      this.isVideo = true
    },
    openImageModel() {
      this.isVideo = false
    },
    youtubeVideo() {
      if (!this.movie.videos) return;
      return (
        "https://www.youtube.com/embed/" + this.movie.videos.results[0].key
      )
    },
    async fetchPopularMovies(movieId) {
      const response = await this.$http.get(
        "/movie/" + movieId + "/similar")
      this.popularMovies = response.data.results.slice(1, 11)
      console.log(this.popularMovies)
    } 
  },
  
}
</script>

<style>
@import url('http://fonts.cdnfonts.com/css/harry-potter');
@import url('http://fonts.cdnfonts.com/css/harrypotter7');


.iframe-container {
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
}

.iframe-container iframe {
  border: 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

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
#hp1 {
  font-family: 'Harry Potter', sans-serif !important;
  font-size: 2rem;
}
#hp2 {
  font-family: 'Harry Potter', sans-serif !important;
  font-size: 1rem;
}
#hpsub {
  font-family: 'Harry Potter', sans-serif !important;
  font-size: 1.5rem;
}
#hp3 {
  font-family: 'HarryPotter7', sans-serif !important;
}
</style>  