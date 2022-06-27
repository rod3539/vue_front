<template>
  <div>
  <section>
  <v-img
      :src="require('@/assets/HomeView/sirius.gif')"
      class="white--text"
      gradient="to bottom, rgba(11, 28, 30, .9), rgba(0,0,0,0)"
    >
    <div id="hp"><p class="text-center mt-16 mb-3">Movie Community</p></div>
    <div class="text-center" id="hp">
    <v-btn text>
      <router-link class="text-decoration-none red--text" :to="{ name: 'NewReview' }"><span>create</span></router-link>
    </v-btn>
    </div>
      <v-container class="mt-16">
        <v-simple-table class="transparent">
        <template v-slot:default>
          <thead>
            <tr class="pr-16">
              <th id="hpsub" class="text-center white--text">
                Reviews
              </th>
              <th id="hpsub" class="text-center white--text">
                Movie Title
              </th>
              <th id="hpsub" class="text-center white--text">
                &nbsp;&nbsp;&nbsp;&nbsp;  Review Title
              </th>
              <th id="hpsub"></th>
              <th id="hpsub"></th>
              
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="review in reviews"
              :key="review.pk"
            >
            <td class="text-center">
              <v-btn text :to="`community/${review.pk}`" class="transparent black--text">{{ review.pk }}</v-btn>
            </td>
            <td class="text-center font-weight-black">
              <v-btn text :to="`community/${review.pk}`" class="transparent black--text">{{ review.movie_title }}</v-btn>
            </td>
            <td class="text-center">
              <v-btn text :to="`community/${review.pk}`" class="transparent black--text">{{ review.title }}</v-btn>
            </td>
            <td></td>
            <td></td>
            </tr>
          </tbody>
        </template>
        </v-simple-table>
      </v-container>
      <div class="text-center">
    <!-- <v-pagination
      v-model="page.number"
      :length="page.idx"
      total-visible="10"
      circle
    ></v-pagination> -->
  </div>
  </v-img>
  </section>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'CommunityView',
    // data() {
    //   return {
    //     reviewPk: this.$route.params.reviewPk,
    //     page: {
    //       number: 4,
    //       idx: 1
    //     }
    //   }
    // },
    computed: {
      ...mapGetters(['reviews', 'isAuthor']),
      likeCount() {
        return this.review.like_users?.length
      }
    },
    methods: {
      ...mapActions(['fetchReviews', 'likeReview'])
    },
    created() {
      this.fetchReviews()
    },
  }
</script>

<style scoped>
  @import url('http://fonts.cdnfonts.com/css/harry-potter');
  @import url('http://fonts.cdnfonts.com/css/harrypotter7');


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
    font-family: 'Harry Potter', sans-serif;
  }
  #hp {
    font-family: 'Harry Potter', sans-serif;
  }
  #movie-img:hover{
    transform: scale(1.2);
    opacity: 10;
  }
  #info {
    font-family: 'Harry Potter', sans-serif;
    font-size: 1.5rem;
  }
  #hpsub {
    font-family: 'HarryPotter7', sans-serif !important;
    font-size: 1.5rem;
    background-color: #999999;
  }
  tbody > tr > td {
    background-color: #eeeeee !important;
  }
</style>
