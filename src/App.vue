<template>
  <banner banner-path="{bannerPath}"></banner>
  <auth></auth>
  <tail></tail>
</template>

<script>
import Tail from "./components/Tail.vue";
import Banner from "./components/Banner.vue";
import Auth from "./components/Auth.vue";

export default {
  components: {
    Tail,
    Banner,
    Auth
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
