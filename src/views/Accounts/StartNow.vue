<template>
  <section id="hero">
    <v-img
      :src="require('@/assets/StartNow/harrypotterhome.gif')"
      class="white--text"
      gradient="to bottom, rgba(11, 28, 30, .9), rgba(0,0,0,0)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center mx-auto"
          height="100%"
          max-width="700"
          width="100%"
        >

          <div id="hp">
            <p class="mt-5 mb-3" >Welcome To Harry Potter Movie World</p>
          </div>
            <br>
          <br>
          <div
            :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
            class="d-flex flex-wrap"
          >
            <v-btn id="hp" text to="/login" class="green--text">
              Login
            </v-btn>
            <p id="hp" class="font-weight-bold ml-6 mr-4 my-4">or</p>
            <v-btn text id="hp" to="/signup" class="purple--text">
              SignUp
            </v-btn>
          </div>
        </v-responsive>
      </v-container>
      </v-img>
  </section>
</template>

<script>
  export default {
    name: 'StartNow',

    provide: {
      theme: { isDark: true },
    },
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


