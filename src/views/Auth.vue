<template>
  <div id="auth" class=" flex flex-col box-border main-wrapper">
    <h1 class="font-title text-black text-5xl font-bold mx-auto mt-28">Conectarse</h1>
    <login-box></login-box>
  </div>
</template>

<script>
import LoginBox from "../components/LoginBox.vue";


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Auth",
  components: {
    LoginBox
  },
  data() {
    return {
      currentPath: this.$route.path,
    }
  },
  mounted() {
    console.log(this.currentPath);
  }
}
</script>

<style scoped>

</style>