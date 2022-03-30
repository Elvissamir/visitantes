<template>
  <div class="main-content-wrapper">
    <h1 class="text-2xl font-subtitle text-black font-medium">Registro Visitas</h1>
    <form  @submit.prevent="">
      <h2 class="sub">Datos Personales</h2>
      <div class="row">
        <entry-small name="Cedula"></entry-small>
        <entry-small name="Celular"></entry-small>
      </div>
      <div class="row">
        <entry-small name="Nombre"></entry-small>
        <entry-small name="Apellido"></entry-small>
      </div>
      <h2 class="sub">Visita</h2>
      <div class="column">
        <entry-long name="Empresa de Origen"></entry-long>
        <entry-select name="Edificio" :options="options"></entry-select>

      </div>
    </form>
  </div>
</template>

<script>

import EntrySmall from "../components/EntrySmall.vue";
import EntryLong from "../components/EntryLong.vue";
import EntrySelect from "../components/EntrySelect.vue";

export default {
  name: 'AddVisitor',
  components: {
    EntrySmall,
    EntryLong,
    EntrySelect,
  },
  data() {
    return {
      options: [
        {id:1,name:'Opcion 1'},
        {id:2,name:'Opcion 2'},
        {id:3,name:'Opcion 3'},
        {id:4,name:'Opcion 4'}
      ]
    }
  }
}
</script>

<style scoped>

.row {
  column-gap: 36px;
  @apply flex flex-row flex-nowrap
}

.column {
  @apply flex flex-col flex-nowrap
}

.sub {
  @apply font-subtitle font-bold text-sm
}
</style>