<template>
  <form @submit.prevent="" class="loginForm">
    <div class="flex flex-col py-10 px-10 mx-auto">
      <div class="w-full mt-2">
        <input class="loginInput" placeholder="Usuario" type="email" required v-model="user">
      </div>
      <div class="w-full mt-4">
        <input class="loginInput" placeholder="Contraseña" type="password" required v-model="password">
      </div>
      <p v-if="alert" class="text-red-400 text-xs ml-24 mb-3">{{ info }}</p>
      <login-btn class="mt-3"></login-btn>
    </div>
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