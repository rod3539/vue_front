<template>
  <div>
    <section>
    <v-img
        :src="require('@/assets/community.jpg')"
        class="white--text"
        height="1100"
        gradient="to bottom, rgba(11, 28, 30, .9), rgba(0,0,0,0)"
      >
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center" dense>
    <v-card
      elevation="0"
      width="600"
      class="mx-16 mb-12 pb-12 orange lighten-5"
    >
    <v-card-text>
      <p class="text-h4 text--primary">
        {{ review.movie_title }}
      </p>
      <p>{{ review.title }}</p>
      <div class="text--primary">
        {{ review.content }}
      </div>
    </v-card-text>
    <div class="text-right">
      <v-btn text @click="likeReview(review.pk)" color="error" class="mb-6">
        <v-icon left>mdi-heart</v-icon> Like&nbsp;&nbsp;&nbsp;&nbsp;  {{ likeCount }}
      </v-btn>
    </div>
      <!-- {{ review.comment_count }} | {{ review.like_count }} -->
    <div v-if="isAuthor">
      <v-btn :to="{ name: 'ReviewEditView', params: { reviewPk } }" class="mx-3" color="white--text purple">
        Edit
      </v-btn>
      <v-btn @click="deleteReview(reviewPk)" color="error">
        Delete
      </v-btn>
    </div>
    </v-card>
      </v-row>
    </v-container>
    </v-img>
  </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ReviewDetailView.vue',
  data() {
    return {
      reviewPk: this.$route.params.reviewPk
    }
  },
  computed: {
    ...mapGetters(['isAuthor', 'review', ]),
    likeCount() {
        return this.review.like_users?.length
      }
  },
  methods: {
    ...mapActions([
      'fetchReview',
      'deleteReview',
      'likeReview'
    ])
  },
  created() {
    this.fetchReview(this.reviewPk)
  }
}
</script>

<style>

</style>