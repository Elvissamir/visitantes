<template>
  <top-banner banner-path="{bannerPath}"></top-banner>
  <nav-bar></nav-bar>
  <main class="box-border ">
    <router-view></router-view>
  </main>
  <the-footer></the-footer>

</template>

<script>


import TopBanner from "./components/TopBanner.vue";
import NavBar from "./components/NavBar.vue";
import TheFooter from "./components/TheFooter.vue";
import HomePage from "./views/HomePage.vue";

export default {
  components: {
    TopBanner,
    TheFooter,
    NavBar,
    HomePage

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
