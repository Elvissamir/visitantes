<template>
  <top-banner banner-path="{bannerPath}"></top-banner>
  <nav-bar></nav-bar>
  <main class="box-border h-full">
    <router-view></router-view>
  </main>

</template>

<script>


import TopBanner from "./components/TopBanner.vue";
import NavBar from "./components/NavBar.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  components: {
    TopBanner,
    TheFooter,
    NavBar

  },


  data() {
    return {
      bannerPath: '../public/banner.png',

    }
  }
}
</script>

<style>


</style>
