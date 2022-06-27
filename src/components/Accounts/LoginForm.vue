<template>
<div>
  <v-card-text>
    <v-form @submit.prevent="login(credentials)">
      <v-text-field 
        prepend-icon="person" 
        v-model="credentials.username" 
        label="username" 
        type="text" 
        required
        >
      </v-text-field>
      <v-text-field 
        prepend-icon="lock" 
        v-model="credentials.password" 
        label="password" 
        type="password"
        required
      >
      </v-text-field>
      <v-btn color="primary" width="90">로그인</v-btn>
    </v-form>
    <br>
    <h4 class="st-font">회원정보가 없다면 아래 회원가입을 눌러주세요.</h4>
    <div class="text-white st-font form-group">
      <v-btn 
        @click="moveToSignUp" 
        color="primary"
        width="90"
        id="Signup" type="submit">회원가입</v-btn>
    </div>
  </v-card-text>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'LoginForm',
  data() {
    return {
      credentials: {
        username: '',
        password: '',
      }
    }
  },
  computed: {
    ...mapGetters(['authError'])
  },
  methods: {
    ...mapActions,
    moveToSignUp: function () {
        this.$router.push({ name: 'SignupView' })
      }
  }
}
</script>

<style>

</style>