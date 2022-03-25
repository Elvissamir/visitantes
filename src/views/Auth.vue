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
  name: "Auth",
  components: {
    LoginBox,
    LoginTitle
  },
  data() {
    return {}
  }

}
</script>

<style scoped>

</style>