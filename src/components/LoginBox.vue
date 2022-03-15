<template>
  <form @submit.prevent="" class="w-[450px] h-[240px] mt-40 mb-60 mx-auto bg-royal drop-shadow-cs rounded-[10px] ">

    <div class="mt-8 mb-8 mx-24">
      <input  class="h-10 w-60 bg-white  rounded font-content font-medium text-royal border-slate-500 placeholder:ml-0.5 focus:border-amber-500" placeholder="Usuario" type="email"  v-model="user">
    </div>
    <div class="mt-8 mb-2 mx-24">
      <input  class="h-10 w-60 bg-white  rounded font-content font-medium text-royal focus:border-amber-500" placeholder="Contraseña"  type="password" v-model="password">
    </div>
      <p v-if="alert" class="text-red-400 text-xs  ml-24 mb-3">{{info}}</p>
      <login-btn class="flex flex-row justify-center"></login-btn>


  </form>




</template>

<script>
import LoginBtn from "./LoginBtn.vue";
export default {
  components: {
    LoginBtn
  },
  data(){
    return{
      user:'',
      password:'',
      info:'Usuario o Contraseña erronea',
      alert:false

    }
  }

  }

</script>

<style scoped>

</style>