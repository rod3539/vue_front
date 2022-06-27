<template>
<v-app-bar app color="rgba(4,16,50,.99)" height="60">
  <v-avatar v-if="!isLoggedIn" size="60" width="100" tile class="mx-0 px-0">
    <v-img :src="require('@/assets/Navbar/HarryPotter.jpg')">
    <router-link :to="{ name: 'HomeView' }"></router-link>
    </v-img>
  </v-avatar>
  <v-toolbar-title v-if="isLoggedIn" class="mx-2">
    <router-link class="text-decoration-none white--text" :to="{ name: 'HomeView' }">
      Potter Movie World
    </router-link>
    </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="!isLoggedIn" class="transparent">
        <router-link class="text-decoration-none white--text" :to="{ name: 'LoginView' }">Login</router-link>
      </v-btn>
      <v-btn v-if="!isLoggedIn" class="transparent">
        <router-link class="text-decoration-none white--text" :to="{ name: 'SignupView' }">Signup</router-link>
      </v-btn>
      <v-icon large color="white">search</v-icon> 
      <v-autocomplete
        v-if="isLoggedIn"
        class="mt-6 white--text"
        clearable 
        hide-no-data 
        hide-selected
        color="white"
        label="search"
        flat
        :items="movies"
        item-color="white"
        item-text="title"
        item-value="movie_id"
        id="search"
        menu-props="{'closeOnContentClick': true}"
      >
      <template v-slot:item="{item}">
        <v-btn :to="{ name: 'MovieDetail2', params: {id: `${item.movie_id}`} } ">
        {{item.title}}</v-btn>
      </template>
      </v-autocomplete>
    <div v-if="isLoggedIn">
      <v-btn class="transparent">
        <router-link class="text-decoration-none white--text" :to="{ name: 'CommunityView' }" >Community</router-link>
      </v-btn>
      <v-btn class="transparent">
        <router-link class="text-decoration-none white--text" :to="{ name: 'recommendView' }">Recommend</router-link>
      </v-btn>
      <v-btn class="transparent">
        <router-link @click.native="logout" to="#" class="text-decoration-none white--text" >Logout
        </router-link>
      </v-btn>
      <v-btn :to="{ name: 'profile', params: {username: `${currentUser.username}`} }" class="transparent">
        <v-avatar size="40" tile>
          <v-img src="https://static.wikia.nocookie.net/harrypotter/images/1/1e/Hedwig_Snowy_Owl_PM.png"></v-img>
        </v-avatar>
      </v-btn>
    </div>
  <link href="http://fonts.cdnfonts.com/css/harry-potter" rel="stylesheet">
  </v-app-bar>
</template>


<script>
import { mapGetters, mapState, mapActions } from 'vuex'
export default {
  name: 'NavBar',
  data:()=>({
    drawer:null,
    model:'',
    search:null,
  }),
  computed: {
    ...mapGetters(['isLoggedIn', 'currentUser']),
    ...mapState(['isLogin']),
    movies(){
      return this.$store.state.movies
    },
  },
  methods: {
    ...mapActions(['getMovies']),
    logout() {
      this.$store.dispatch('logout')
    },
  },
  }
</script>


<style>
@import url('http://fonts.cdnfonts.com/css/harry-potter');
.v-app-bar {
  font-family: 'Harry Potter', sans-serif !important;
}
.v-autocomplete input {
  color: white !important;
  font-size: 0.7rem !important;
}
</style>