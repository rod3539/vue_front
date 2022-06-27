<template>
  <v-footer color="black" padless>
    <v-card flat tile class="black white--text text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">{{icon}}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text pt-0">
        Soon we must all face the choice between what is right and what is easy.
        <div>— Albus Dumbledore, Harry Potter and the Goblet of Fired</div></v-card-text>
      <v-divider></v-divider>
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }}  - <strong>Final Project</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram'
    ]
  })
}
</script>

<style>
footer {
  display: flex;
  justify-content: center;
  width: 100%;
  bottom: 0;
  position: absolute;
}
</style>