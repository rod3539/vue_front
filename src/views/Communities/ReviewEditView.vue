<template>
  <div>
  <v-img
    :src="require('@/assets/ravenclaw.png')"
    height="1150"
    class="white--text"
    gradient="to bottom, rgba(11, 28, 30, .9), rgba(0,0,0,0)"
  >
  <div id="hp"><p class="text-center mt-16 mb-3 white--text">Edit Review</p></div>
  <ReviewForm :review="review" action="update" />
  </v-img>
  </div>
</template>

<script>
import ReviewForm from '@/components/ReviewForm.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ReviewEditView',
  components: {
    ReviewForm
  },
  computed: {
    ...mapGetters(['review', 'isReview'])
  },
  methods: {
    ...mapActions(['fetchReview'])
  },
  created() {
    this.fetchReview(this.$route.params.reviewPk)
  }
}
</script>

<style>
  @import url('http://fonts.cdnfonts.com/css/harry-potter');

  #hp {
    font-family: 'Harry Potter', sans-serif !important;
    font-size: 4rem;
  }

</style>