<template>
  <div class=" mx-[78px] ">
    <h1 class="text-2xl font-subtitle text-black font-medium mt-[60px] mb-[38px]">Registro Visitas</h1>
    <form @submit.prevent="">
      <h2 class="sub mb-[25px]">Datos Personales</h2>

      <div class="row">
        <entry-small name="Cedula" v-model.trim="cardId"></entry-small>
        <entry-small name="Celular" v-model.trim="phone"></entry-small>
      </div>
      <div class="row">
        <entry-small name="Nombre" v-model.trim="name"></entry-small>
        <entry-small name="Apellido" v-model.trim="lastName"></entry-small>
      </div>

      <h2 class="sub mt-[16px] mb-[21px]">Visita</h2>

      <div class="column">
        <entry-long name="Empresa de Origen" class="mb-[12px]"></entry-long>
        <entry-select name="Edificio" :options="options"></entry-select>

        <div class="row">
          <entry-select name="Oficina"></entry-select>
          <entry-small name="Extension"></entry-small>
        </div>

        <div class="row">
          <entry-select name="Persona a Visitar"></entry-select>
          <entry-small name="Codigo Tarjeta"></entry-small>
        </div>
        <entry-select name="Motivo"></entry-select>
      </div>

      <base-button>Registrar</base-button>
    </form>
  </div>
</template>

<script>

import EntrySmall from "../components/EntrySmall.vue";
import EntryLong from "../components/EntryLong.vue";
import EntrySelect from "../components/EntrySelect.vue";
import BaseButton from "../components/BaseButton.vue";

export default {
  name: 'AddVisitor',
  components: {
    EntrySmall,
    EntryLong,
    EntrySelect,
    BaseButton,
  },
  data() {
    return {
      options: [
        {id: 1, name: 'Opcion 1'},
        {id: 2, name: 'Opcion 2'},
        {id: 3, name: 'Opcion 3'},
        {id: 4, name: 'Opcion 4'}
      ],
      name: '',
      lastName: '',
      cardId: null,
      phone: ''
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
  @apply flex flex-col flex-nowrap items-start justify-evenly
}

.sub {
  @apply font-subtitle font-bold text-sm
}
</style>