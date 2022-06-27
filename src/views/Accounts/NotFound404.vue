<template>
  <div>
    <section>
      <v-img
      :src="require('@/assets/Voldemort.jpg')"
      height="1300"
      class="white--text"
      gradient="to bottom, rgba(11, 28, 30, .9), rgba(0,0,0,0)"
    >
    <div id="hp">
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <p class="text-center mt-5 mb-3">Page is Not Founded</p>
    </div>
    </v-img>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'NotFound404',
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
