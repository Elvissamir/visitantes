<template>
  <div class="main-content-wrapper">
    <h1 class="mt-[60px] font-subtitle font-medium text-black text-2xl pb-[125px] text-center">Usuario</h1>
    <form @submit.prevent="sendUser">
      <div class=" flex flex-row flex-wrap w-[538px] gap-x-[38px]  mx-auto">
        <entry-small name="Correo" input-type="email" v-model.trim="email"></entry-small>
        <entry-small name="Nombre de Usuario" input-type="text" v-model.trim="username"></entry-small>
        <entry-small name="Contraseña" input-type="password" v-model.trim="password"></entry-small>
        <entry-small name="Repita Contraseña" input-type="password" v-model.trim="checkPassword"></entry-small>
        <entry-select-small name="Rol"></entry-select-small>

      </div>
      <base-button class="mt-[148px] mx-[655px]">Registrar</base-button>
    </form>
  </div>
</template>

<script>
import EntrySmall from "../components/EntrySmall.vue";
import EntrySelectSmall from "../components/EntrySelectSmall.vue";
import BaseButton from "../components/BaseButton.vue";

export default {
  name: "AddUser",
  components: {
    EntrySmall,
    EntrySelectSmall,
    BaseButton
  },
  data() {
    return {

      username: "",
      email: "",
      password: "",
      checkPassword: "",


    }
  },
  methods: {
    sendUser() {

    }
  }
}
</script>

<style scoped>


</style>