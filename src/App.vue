<template>
  <banner banner-path="{bannerPath}"></banner>
  <auth></auth>
  <tail></tail>
</template>

<script>
import Tail from "./components/Tail.vue";
import Banner from "./components/Banner.vue";
import LoginTitle from "./components/LoginTitle.vue";
import LoginBtn from "./components/LoginBtn.vue";
import LoginBox from "./components/LoginBox.vue";
import Auth from "./components/Auth.vue";
export default {
  components: {
    Tail,
    Banner,
    LoginBox,
    LoginBtn,
    LoginTitle,
    Auth
  },
  data() {
    return {
      bannerPath:'../public/banner.png',

    }
  }
}
</script>

<style>



</style>
