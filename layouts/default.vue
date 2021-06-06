<template>
  <v-app dark>
    <v-main class="bg">
      <v-container>
        <nuxt  />
      </v-container>
    </v-main>
     <v-footer dark class="justify-center" >
      <span class="red--text">
        &copy; {{ new Date().getFullYear() }} - ZTF</span> 
        <v-spacer></v-spacer>

        <v-btn dark icon class="red--text mx-4" href="https://www.github.com/ZTF666/" target='blank'><v-icon size="24px" >mdi-github</v-icon></v-btn>
  </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
   
    }
  }
}
</script>
<style>
.bg {
 background-image: url("~/static/dnbg.jpg");
 /* background-color: #000000; */
}
</style>