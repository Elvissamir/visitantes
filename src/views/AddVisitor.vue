<template>
  <div class="mx-[78px] flex flex-col shrink-1 h-full">
    <h1 class="text-2xl font-subtitle text-black font-medium mt-[60px] mb-[38px]">
      Registro Visitas
    </h1>
    <form @submit.prevent="AddVisit">
      <h2 class="sub mb-[25px]">Datos Personales</h2>

      <div class="row">
        <entry-small
            name="Cedula"
            input-type="number"
            v-model.trim="CI"
            @keydown.enter="findVisitor"
        ></entry-small>
        <entry-small name="Celular" input-type="tel" v-model.trim="phone" :model-value="phone"></entry-small>
      </div>
      <div class="row">
        <entry-small name="Nombre" input-type="text" v-model.trim="name" :model-value="name"></entry-small>
        <entry-small name="Apellido" input-type="text" v-model.trim="lastName" :model-value="lastName"></entry-small>
      </div>

      <h2 class="sub mt-[16px] mb-[21px]">Visita</h2>

      <div class="column">
        <entry-long name="Empresa de Origen" class="mb-[12px]" v-model="homeCompany"></entry-long>
        <entry-select name="Edificio" :options="options" v-model="building" @select-value="setOption"></entry-select>

        <div class="row">
          <entry-select name="Oficina" v-model="office"></entry-select>
          <entry-small name="Extension" v-model="extension"></entry-small>
        </div>

        <div class="row">
          <entry-select name="Persona a Visitar" v-model="host"></entry-select>
          <entry-small name="Codigo Tarjeta" v-model="cardId"></entry-small>
        </div>
        <entry-select name="Motivo" v-model="reason"></entry-select>
      </div>

      <div class="row mt-[25px] mb-[54px]">
        <collapse-input>
          <template #title>Vehiculos</template>
          <template #body>
            <entry-small name="Fabricante" input-type="text"></entry-small>
            <entry-small name="Serie" input-type="text"></entry-small>
            <entry-small name="Numero de Placa" input-type="text"></entry-small>
          </template>
        </collapse-input>

        <collapse-input>
          <template #title> Equipos</template>
          <template #body>
            <entry-small name="Marca" input-type="text"></entry-small>
            <entry-small name="Modelo" input-type="text"></entry-small>
            <entry-small name="Serial" input-type="text"></entry-small>
          </template>
        </collapse-input>
      </div>
      <base-button >Registrar</base-button>
    </form>
  </div>
</template>

<script>
import EntrySmall from "../components/EntrySmall.vue";
import EntryLong from "../components/EntryLong.vue";
import EntrySelect from "../components/EntrySelect.vue";
import BaseButton from "../components/BaseButton.vue";
import CollapseInput from "../components/CollapseInput.vue";

export default {
  name: "AddVisitor",
  components: {
    EntrySmall,
    EntryLong,
    EntrySelect,
    BaseButton,
    CollapseInput,
  },
  data() {
    return {
      options: [
        {id: 1, name: "Opcion 1"},
        {id: 2, name: "Opcion 2"},
        {id: 3, name: "Opcion 3"},
        {id: 4, name: "Opcion 4"},
      ],
      name: "",
      lastName: "",
      CI: "",
      phone: "",
      homeCompany: "",
      office: "",
      reason: "",
      building: "",
      host: "",
      extension: "",
      cardId: "",
      plate: "",
      maker: "",
      cardModel: "",
      brand: "",
      serial: "",
      deviceModel: "",

    };
  },
  methods: {

    setOption(value) {
      this.building = value;
      console.log((this.building))
    },
    findVisitor: async function () {
      const CI = this.CI;
      const URL = `http://127.0.0.1:8000/visitors/${CI}`;
      const visitor =  await fetch(URL).then(
          (res)=>{
            let data = res.json()
            console.log(data);
          }
      ).catch((error)=>{
        console.log(error);
      });

    },
  },
};
</script>

<style scoped>
.row {
  column-gap: 36px;
  @apply flex flex-row flex-nowrap;
}

.column {
  @apply flex flex-col flex-nowrap items-start;
}

.sub {
  @apply font-subtitle font-bold text-sm;
}
</style>
