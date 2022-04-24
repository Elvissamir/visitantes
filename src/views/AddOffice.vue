<template>
  <div class="main-content-wrapper">
    <h1 class="mt-[60px] font-subtitle font-medium text-black text-2xl pb-[125px] text-center">Oficina
      Administrativa</h1>
    <form @submit.prevent="sendUser">
      <div class=" flex flex-row flex-wrap w-[538px] gap-x-[38px] gap-y-[16px] relative mx-auto">
        <entry-long name="Nombre Oficina" input-type="text" v-model.trim="office"></entry-long>
        <entry-long name="Acronimo" input-type="text" v-model.trim="acronymOffice"></entry-long>
        <entry-select name="Edificio"></entry-select>
        <entry-small name="Piso" input-type="number" v-model.trim="flat"></entry-small>
        <entry-small name="Extension Telefonica" input-type="tel" v-model.trim="phone"></entry-small>

      </div>
      <base-button class="mt-[148px] mx-[655px]">Registrar</base-button>
    </form>
  </div>
</template>

<script>
import EntryLong from "../components/EntryLong.vue";
import EntrySmall from "../components/EntrySmall.vue";
import EntrySelect from "../components/EntrySelect.vue";
import BaseButton from "../components/BaseButton.vue";

export default {
  name: "AddOffice",
  components: {
    EntryLong,
    EntrySmall,
    EntrySelect,
    BaseButton,
  },
  data() {
    return {
      office: "",
      acronymOffice: "",
      flat: "",
      phone: "",
      building: ""
    }
  }
}
</script>

<style scoped>

</style>