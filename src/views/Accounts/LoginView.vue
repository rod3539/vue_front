<template>
  <div>
  <section>
    <v-img
      :src="require('@/assets/StartNow/LoginView.jpeg')"
      class="white--text"
      height="1150"
      gradient="to bottom, rgba(11, 28, 30, .9), rgba(0,0,0,0)"
    >
      <v-container class="fill-height" fluid>
        <v-row justify="left" dense>
          <v-col cols="12" sm="8" md="4" lg="4">
            <v-card elevation="0"
            :loading="loading"
            width="600"
            class="mx-16 mb-12 pb-12 orange lighten-5"
            >
            <v-img
            class="gray--text align-end"
            height="500"
            :src="require('@/assets/StartNow/startnow.gif')"
            >
            <v-card-title>Welcome Harry Potter Movie House</v-card-title>
            </v-img>
              <div class="text-center">
                <h1 class="mb-2"></h1>
              </div>
            <v-card-text>
              <p v-if="authError">
                <account-error-list ></account-error-list>
              </p>
              <v-form @submit="login">
                  <v-text-field label="Enter your username" name="username" v-model="username" type="text" id="username" class="rounded-0" outlined required>
                  </v-text-field>
                  <v-text-field label="Enter your password" name="password" v-model="password" type="password" id="password" class="rounded-0" outlined required>
                  </v-text-field>
              </v-form>
                <v-btn @click="login" class="btn-gradient green darken-4 large white--text" x-large block dark>
                  Login
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
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import AccountErrorList from '@/components/Accounts/AccountErrorList.vue'

  export default {
    name: 'LoginView',
    components: {
      AccountErrorList,
    },
  data() {
    return {
      username: '',
      password: '',
    }
  },
  computed: {
      ...mapGetters(['authError'])
  },
  methods: {
    login(event) {
      event.preventDefault()
      const userData = {
        username: this.username,
        password: this.password
      }

      // dispatch
      this.$store.dispatch('login', userData)
    },
  }
  }
</script>

<style>

</style>