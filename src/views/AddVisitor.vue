<template>
  <div class="main-content-wrapper ">

    <h1 class="text-2xl font-subtitle text-black font-medium">Registro Visitas</h1>
    <h2 class="">Datos Personales</h2>
    <div class="row">
      <input-small field-name="Cedula"></input-small>
      <input-small field-name="Celular"></input-small>

    </div>
    <div class="row">
      <input-small field-name="Nombre"></input-small>
      <input-small field-name="Apellido"></input-small>
    </div>
    <h2 class="">Visitas</h2>
    <div class="column">

      <input-long></input-long>
      <input-select-long ></input-select-long>
      <input-select-long></input-select-long>
      <input-select-long></input-select-long>
      <input-select-long></input-select-long>


    </div>


  </div>
</template>

<script>
import InputSmall from "../components/InputSmall.vue";
import InputSelectLong from "../components/InputSelectLong.vue";
import InputLong from "../components/InputLong.vue";

export default {
  name: "AddVisitor",
  components: [
    InputSmall,
    InputLong,
    InputSelectLong
  ]
}
</script>

<style scoped>

</style>