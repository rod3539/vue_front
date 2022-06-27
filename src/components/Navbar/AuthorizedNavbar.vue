<template>
  <nav>
    <v-app-bar app color="black" dark height="60">
      <!-- <v-icon class="mr-2">fas fa-video</v-icon> -->
      <v-toolbar-title>SSAFY PROJECT</v-toolbar-title>
      <v-btn text class="ml-2" to="/">Movies</v-btn>
      <v-btn text class="ml-2" to="/actors">Recommends</v-btn>
      <v-spacer></v-spacer>
      <v-btn text class="ml-2">Profile</v-btn>
      <!-- <v-autocomplete 
      clearable 
      hide-no-data 
      hide-selected
      color="white"
      label="search"
      prepend-inner-icon="search"
      flat
      >
      </v-autocomplete> -->
      <v-btn icon>
        <v-badge color="green" content="" overlap>
          <v-icon>far fa-bell</v-icon>
        </v-badge>
      </v-btn>
      <!-- <v-badge bordered bottom color="green" dot offset-x="10" offset-y="10">
        <v-avatar size="40">
          <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
        </v-avatar>
      </v-badge> -->
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
  })
}
</script>

<style>

</style>