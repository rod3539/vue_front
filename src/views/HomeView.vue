<template>
<div>
    <v-carousel
    height="1100"
    hide-delimiter-background
    show-arrows-on-hover
    delimiter-icon="mdi-minus"
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
    >
    <v-container class="fill-height mx-16 mt-12 pt-12" fluid>
    <v-row  dense>
    <v-col sm="12" md="10" lg="4">
    <v-card
    elevation="4"
    max-width="1600"
    class="mx-16 mt-12 pt-12 transparent"
    >
    <div id="hp" class="text-center display-1 mx-2 white--text">{{ item.content1 }}</div>
    <br>
    <br>
    <div id="hp" class="text-center mx-2 white--text mb-4">{{ item.content2 }}</div>
    <v-row align="center">
      <div class="col-2"></div>
      <v-btn id="hp3" :to="`/movie/${item.url}`" color="white" class="mt-6 col-7 ml-4 mb-8">{{ item.title }}</v-btn>
    </v-row>
    </v-card>
    </v-col>
    </v-row>
    </v-container>
    </v-carousel-item>
  </v-carousel>
<section>
  <v-img
      :src="require('@/assets/HomeView/dementors.gif')"
      class="white--text"
      gradient="to bottom, rgba(11, 28, 30, .9), rgba(0,0,0,0)"
    >
    <PopularMovies />
    <LatestMovie />
    <UpcomingMovies />
  </v-img>
  </section>
</div>
</template>

<script>
import LatestMovie from '@/components/LatestMovie.vue'
import PopularMovies from '../components/PopularMovies'
import UpcomingMovies from '@/components/UpcomingMovies.vue'

export default {
  name: 'HomeView',
  components: {
    PopularMovies,
    UpcomingMovies,
    LatestMovie
  },
  data () {
      return {
        items: [
          {
            src: require("@/assets/HomeView/homeview1.jpg"),
            title: "The Goblet of Fire",
            content1: "Welcome Harry Potter MovieWorld",
            content2: "Get Information of Harry Potter",
            url: "674-harry-potter-and-the-goblet-of-fire?language=ko"
          },
          {
            src: require("@/assets/HomeView/pheonix.jpg"),
            title: "The Order of the Phoenix",
            content1: "Harry Potter Series",
            content2: "Evil Must Be Confronted.",
            url: "movie/675-harry-potter-and-the-order-of-the-phoenix"
          },
          {
            src: require("@/assets/HomeView/bloodprince.jpg"),
            title: "The Half Blood Prince",
            content1: "Harry Potter Series",
            content2: "Dark Secrets Revealed",
            url: "767-harry-potter-and-the-half-blood-prince"
          },
          {
            src: require("@/assets/HomeView/Beast.jpg"),
            title: "Fantastic Beasts",
            content1: "Before Harry Potter",
            content2: "Get Information of Fantastic Beast",
            url: "259316-fantastic-beasts-and-where-to-find-them"
          },
        ],
      }
    },
}
</script>

<style>
@import url('http://fonts.cdnfonts.com/css/harry-potter');
@import url('http://fonts.cdnfonts.com/css/harrypotter7');

#hp {
  font-family: 'Harry Potter', sans-serif !important;
}
#hp2 {
  font-family: 'Harry Potter', sans-serif !important;
  font-size: 1rem;
}
#hp3 {
  font-family: 'HarryPotter7', sans-serif !important;
  font-size: 1rem;
}
</style>