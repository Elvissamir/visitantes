<template>
  <form @submit.prevent="" class="loginForm ">

    <div class="mt-8 mb-8 mx-24">
      <input class="loginInput" placeholder="Usuario" type="email" required v-model="user">
    </div>
    <div class="mt-8 mb-2 mx-24">
      <input class="loginInput" placeholder="Contraseña" type="password" required v-model="password">
    </div>
    <p v-if="alert" class="text-red-400 text-xs  ml-24 mb-3">{{ info }}</p>
    <login-btn class="flex flex-row justify-center"></login-btn>

  </form>


</template>

<script>
import LoginBtn from "./LoginBtn.vue";

export default {
  components: {
    LoginBtn
  },
  data() {
    return {
      user: '',
      password: '',
      info: 'Usuario o Contraseña Erronea',
      alert: false,
      userIsEmpty: false,
      passwordIsEmpty: false

    }
  }

}

</script>

<style scoped>

</style>