<template>
<div>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center" dense>
        <v-card elevation="0" class="orange lighten-5" width="600">
          <div class="text-center">
            <h1 class="mb-2">Review</h1>
          </div>
        <v-card-text>
          <v-form @submit.prevent="onSubmit">
              <v-text-field label="Enter movie title" name="movie_title" v-model="newReview.movie_title" type="text" id="movie_title" class="rounded-0" outlined required>
              </v-text-field>
              <v-text-field label="Enter rank 0 to 10" name="rank" v-model="newReview.rank" type="text" id="rank" class="rounded-0" outlined required>
              </v-text-field>
              <v-text-field label="Enter title" name="title" v-model="newReview.title" type="text" id="title" class="rounded-0" outlined required>
              </v-text-field>
              <v-textarea label="Enter content" name="content" v-model="newReview.content" type="text" id="content" class="rounded-0" outlined required>
              </v-textarea>
          </v-form>
              <v-btn @click="onSubmit" class="btn-gradient purple lighten-3 large white--text" x-large block dark>
                {{action}}
              </v-btn>
        </v-card-text>
        </v-card>
    </v-row>
  </v-container>
</div>
</template>

<script>
import { mapActions } from 'vuex'

  export default {
    name: 'NewReview',
    props: {
      review: Object,
      action: String,
    },
    data() {
      return {
        newReview: {
          movie_title: this.review.movie_title,
          rank: this.review.rank,
          title: this.review.title,
          content: this.review.content,
        }
      }
    },

    methods: {
      ...mapActions(['createReview', 'updateReview']),
      onSubmit() {
        if (this.action === 'create') {
          this.createReview(this.newReview)
        } else if (this.action === 'update') {
          const payload = {
            pk: this.review.pk,
            ...this.newReview,
          }
          this.updateReview(payload)
        }
      },
    },
  }
</script>

<style>

</style>