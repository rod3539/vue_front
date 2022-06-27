<template>
  <div>
    <section>
      <v-img
      :src="require(`@/assets/${imgName}`)"
      @click="changeImg"
      class="white--text"
      height="1150"
      gradient="to bottom, rgba(11, 28, 30, .9), rgba(0,0,0,0)"
      >
      <v-container class="mx-16 mt-12 pt-12" fluid>
        <v-row dense>
        <v-col sm="12" md="10" lg="4">
        <v-card
        elevation="4"
        max-width="1600"
        class="mx-16 mt-12 pt-12 transparent"
        >
        <div class="display-2 mx-2 white--text">Username: {{ profile.username }}</div>
        <br>
        <br>
        <v-divider color="white" class="mx-4"></v-divider>
        <v-card-text v-for="review in profile.user_reviews" :key="review.pk">
          <p class="display-1 white--text">Your Reviews</p>
          <li class="white--text">
            <v-btn :to="{ name: 'ReviewDetailView', params: { reviewPk: review.pk } }" class="transparent white--text">
            {{ review.title }}
          </v-btn>
          </li>
        </v-card-text>
        <!-- <div class="mx-2 white--text">{{ item.content2 }}</div>
        <v-btn :to="`/movie/${item.url}`" color="white" class="mt-1">{{ item.title }}</v-btn> -->
        </v-card>
        </v-col>
        </v-row>
      </v-container>
      </v-img>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'


export default {
  name: 'ProfileView',
  data() {
    return {
      imgName: 'WallpaperDog-476123.jpg'
    }
  },
  computed: {
    ...mapGetters(['profile'])
  },
  methods: {
    ...mapActions(['fetchProfile']),
    changeImg() {
      if(this.imgName === 'WallpaperDog-476123.jpg') {
        this.imgName = 'slytherin.jpg'
      }else if(this.imgName === 'slytherin.jpg') {
        this.imgName = 'gryfin.jpg'
      }else if(this.imgName === 'gryfin.jpg') {
        this.imgName = 'hufflepuff.jpg'
      }else {
        this.imgName = 'WallpaperDog-476123.jpg'
      }
    }
  },
  created() {
    const payload = { username: this.$route.params.username }
    this.fetchProfile(payload)
  },
}
</script>

<style>

</style>