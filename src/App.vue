<template>
  <v-app>
    <NavBar class="mb-2" auto-hide />
    <v-main class="black">
      <router-view/>
    </v-main>
    <HomeFooter />
  </v-app>
</template>

<script>
import NavBar from './components/Navbar/NavBar.vue'
import HomeFooter from '@/components/Footer/HomeFooter.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    HomeFooter
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
</style>
