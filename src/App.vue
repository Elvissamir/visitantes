<template>
  <top-banner banner-path="{bannerPath}"></top-banner>
  <nav-bar v-if="$route.path !=='/'"></nav-bar>
  <main class="bg-dirtywhite">
    <router-view></router-view>
  </main>
  <the-footer></the-footer>
</template>

<script>
import TopBanner from "./components/TopBanner.vue";
import NavBar from "./components/NavBar.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
  components: {
    TopBanner,
    TheFooter,
    NavBar,
  },

  data() {
    return {
      bannerPath: "../public/banner.png",
    };
  },
};
</script>

<style></style>
