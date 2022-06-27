<template>
<div>
  <v-img
      :src="require('@/assets/mainpage.jpg')"
      height="1150"
      class="white--text"
      gradient="to bottom, rgba(11, 28, 30, .9), rgba(0,0,0,0)"
    >
    <div class="d-flex flex-column align-items-center mt-16">
      <div v-if="!start" class="d-flex flex-column  align-self-center" style="height: 70vh">
        <div id="hp"><p class="text-center mt-5 mb-3">Movie WorldCup</p></div>
        <div id="hp"><p  class="text-center"> What's your favorite movie? </p></div>
        <br>
        <br>
        <button id="hp" v-if="!start" @click="startGame" class="justify-self-center align-self-center btn red--text fs-3"> <span>START</span> </button>  
      </div>
      <div v-else-if="randomMovies.length > 1">
        <div class="d-flex">
          <div class="d-flex justify-content-center align-self-center col-4 ml-8 pl-16">
            <div class="mt-16 pt-8">
              <img id="movie-img" @click="pick1" :src="imgURL1" alt="" width="600" height="700">
              <h1 class="text-center align-self-center">{{randomMovies[nowIndex].title}}</h1>
            </div>
          </div>
          
          <p id="vs" class="text-center align-self-center col-3 pl-16 pt-16" font="Harry Potter">vs</p>
          
          <div class="d-flex justify-content-center align-self-center col-5 pl-16 ml-0 mr-0">
            <div class="mt-16 pt-8">
              <img id="movie-img" @click="pick2" :src="imgURL2" alt="" width="600" height="700">
              <h1 class="text-center align-self-center">{{randomMovies[nowIndex+1].title}}</h1>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div id="hp"><p class="text-center mt-5 mb-3">Movie WorldCup</p></div>
        <div class="d-flex flex-column align-items-center">
          <div id="hpvictory"><h1 class="text-center mb-3"> VICTORY </h1></div>
          <img class="scale justify-self-center align-self-center" :src="imgURL1" alt="" width="600" height="700">
          <v-row align="center" justify="space-around">
            <v-btn id="info" class="mt-9 mb-4 ml-12 mr-12 pt-3" color="white" @click="active = !active" depressed :to="`/movie/${randomMovies[nowIndex].movie_id}`">Movie Information</v-btn>
          </v-row>
          <button id="hp" @click="regame" class="mt-5 btn text-white"><span class="text-center red--text">PLAY AGAIN</span> </button>
        </div>
      </div>
    </div>
  </v-img>
  </div>
</template>

<script>
import { mapActions } from 'vuex'


export default {
  name: 'RecommendView',
  data(){
    return{
      start: false,
      nowIndex: 0,
      imgURL1: '', 
      imgURL2: '',
      finalWinnerURL: '',
      movieId: ''
    }
  },
  methods: {
    ...mapActions(['getMovies']),
    startGame(){
      console.log(this.randomMovies.length)
      this.start = !this.start
      this.imgURL1 = `https://image.tmdb.org/t/p/original${this.randomMovies[this.nowIndex].poster_path}`
      this.imgURL2 = `https://image.tmdb.org/t/p/original${this.randomMovies[this.nowIndex+1].poster_path}`
    },
    pick1(){
      this.$store.dispatch('removeLoserMovie', this.nowIndex+1)
      this.nowIndex += 1
      if (this.nowIndex === this.randomMovies.length){
        this.nowIndex = 0
      }
      if (this.randomMovies.length > 1) {
        this.imgURL1 = `https://image.tmdb.org/t/p/original${this.randomMovies[this.nowIndex].poster_path}`
        this.imgURL2 = `https://image.tmdb.org/t/p/original${this.randomMovies[this.nowIndex+1].poster_path}`
      }
      if (this.randomMovies.length === 1){
        this.imgURL1 = `https://image.tmdb.org/t/p/original${this.randomMovies[this.nowIndex].poster_path}`
      }
    },
    pick2(){
      this.$store.dispatch('removeLoserMovie', this.nowIndex)
      this.nowIndex += 1
      if (this.nowIndex === this.randomMovies.length){
        this.nowIndex = 0
      }
      if (this.randomMovies.length > 1) {
        this.imgURL1 = `https://image.tmdb.org/t/p/original${this.randomMovies[this.nowIndex].poster_path}`
        this.imgURL2 = `https://image.tmdb.org/t/p/original${this.randomMovies[this.nowIndex+1].poster_path}`
      }
      if (this.randomMovies.length === 1){
        this.imgURL1 = `https://image.tmdb.org/t/p/original${this.randomMovies[this.nowIndex].poster_path}`
      }
    },
    regame() {
      this.$store.dispatch('startGame')
      this.start = !this.start
    },
    goMovieDetail() {
      this.$router.push()
    }
  },
  computed: {
    movies(){
      return this.$store.state.movies
    },
    randomMovies(){
      return this.$store.state.randomMovies
    },
  },
  created() {
    this.getMovies()
  }
}
</script>

<style scoped>
  @import url('http://fonts.cdnfonts.com/css/harry-potter');
  p {
    font-size: 4rem;
  }
  span{
    font-size: 3rem;
  }
  img {
    border-radius: 5%;
  }
  #vs {
    font-size: 10rem;
    font-family: 'Harry Potter', sans-serif !important;
  }
  #hp {
    font-family: 'Harry Potter', sans-serif !important;
  }
  #hpvictory{
    font-family: 'Harry Potter', sans-serif !important;
    font-size: 1.5rem;
  }
  #movie-img:hover{
    transform: scale(1.2);
    opacity: 10;
  }
  #info {
    font-family: 'Harry Potter', sans-serif !important;
    font-size: 1.5rem;
  }
</style>
