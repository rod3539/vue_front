<template>
<div>
  <v-img
    :src="require('@/assets/ravenclaw.png')"
    height="1150"
    class="white--text"
    gradient="to bottom, rgba(11, 28, 30, .9), rgba(0,0,0,0)"
  >
  <div id="hp"><p class="text-center mt-16 mb-3 white--text">New Review</p></div>
  <ReviewForm :review="review" action="create" />
  </v-img>
</div>
</template>

<script>
import ReviewForm from '@/components/ReviewForm.vue'

  export default {
    name: 'NewReview',
    components:{
      ReviewForm
    },
    data() {
      return {
        review: {
          pk: null,
          movie_title: '',
          rank: '',
          title: '',
          content: '',
        },
      }
    },
  }
</script>

<style scoped>
  @import url('http://fonts.cdnfonts.com/css/harry-potter');
  p {
    font-size: 4rem;
  }
  span{
    font-size: 2rem;
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
  #movie-img:hover{
    transform: scale(1.2);
    opacity: 10;
  }
  #info {
    font-family: 'Harry Potter', sans-serif !important;
    font-size: 1.5rem;
  }
</style>
