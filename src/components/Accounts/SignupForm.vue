<template>
  <div>
    <v-card-text>

    <account-error-list></account-error-list>

      <v-form @submit.prevent="signup(credentials)">
        <v-text-field 
          v-model="credentials.username" 
          label="username" 
          type="text" 
          required
          >
        </v-text-field>
        <v-text-field 
          v-model="credentials.password1" 
          label="password1" 
          type="password"
          required
        >
        </v-text-field>
        <v-text-field 
          v-model="credentials.password2" 
          label="password2" 
          type="password"
          required
        >
        </v-text-field>
        <v-btn color="primary" width="90">회원가입</v-btn>
      </v-form>
    </v-card-text>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AccountErrorList from '@/components/Accounts/AccountErrorList.vue'

export default {
  name: 'SignupForm',
  components: {
    AccountErrorList,
  },
  data() {
      return {
        credentials: {
          username: '',
          password1: '',
          password2: '',
        }
      }
    },
    computed: {
      ...mapGetters(['authError'])
    },
    methods: {
      ...mapActions(['signup'])
    },
}
</script>

<style>

</style>