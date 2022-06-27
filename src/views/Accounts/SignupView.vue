<template>
  <section>
    <v-img
      :src="require('@/assets/StartNow/signup.jpg')"
      class="white--text"
      height="1150"
      gradient="to bottom, rgba(11, 28, 30, .9), rgba(0,0,0,0)"
    >
    <v-container class="fill-height" fluid>
    <account-error-list v-if="authError"></account-error-list>
    <v-row align="center" justify="center" dense>
      <v-col cols="12" sm="8" md="4" lg="4">
        <v-card elevation="0"
          :loading="loading"
          width="600"
          class="mx-16 mb-12 pb-12 orange lighten-5"
        >
          <v-img
            class="gray--text align-end"
            height="450"
            :src="require('@/assets/StartNow/startnow.gif')"
            >
          </v-img>
          <v-card-text>
            <v-form @submit.prevent="signup">
                <v-text-field label="Enter username" name="username" v-model="username" type="text" id="username" class="rounded-0" outlined required>
                </v-text-field>
                <v-text-field label="Enter password" name="password1" v-model="password1" type="password" id="password1" class="rounded-0" outlined required>
                </v-text-field>
                <v-text-field label="Enter password again" name="password2" v-model="password2" type="password" id="password2" class="rounded-0" outlined required>
                </v-text-field>
            </v-form>
              <v-btn @click="signup" class="btn-gradient green large white--text" x-large block dark>
                SignUp
              </v-btn>
              <br>
              <v-btn @click="$router.go(-1)" class="btn-gradient red darken-4 large white--text" x-large block dark>
                  Back
              </v-btn>
          </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    </v-img>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import AccountErrorList from '@/components/Accounts/AccountErrorList.vue'

  export default {
    name: 'SignupView',
    components: {
      AccountErrorList,
    },
    data() {
      return {
          username: '',
          password1: '',
          password2: '',
      }
    },
    computed: {
      ...mapGetters(['authError'])
    },
    methods: {
      signup() {
        const userData = {
          username: this.username,
          password1: this.password1,
          password2: this.password2,
        }
        this.$store.dispatch('signup', userData)
      }
    },
  }
</script>

<style></style>
