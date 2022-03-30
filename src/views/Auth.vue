<template>

  <div id="auth" class="h-[90vh] flex flex-col bg-dirtywhite  box-border">
    <login-title></login-title>
    <login-box></login-box>
  </div>
</template>

<script>
import LoginBox from "../components/LoginBox.vue";
import LoginTitle from "../components/LoginTitle.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Auth",
  components: {
    LoginBox,
    LoginTitle
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