<template>
  <div class="box-border bg-dirtywhite">
    <h1 class="font-subtitle font-medium text-md text-2xl my-[52px] text-center">Control de Acceso </h1>
    <section class="flex flex-row flex-nowrap justify-center items-center ">

      <div class="info-display relative">
        <h2 class="info-item text-4xl">Visitantes Activos : {{ active }}</h2>
        <h3 class="info-item text-lg">Total hoy : {{ amount }}</h3>
        <h3 class="info-item text-lg">Cerradas :{{ close }}</h3>

        <div class="box-time absolute top-[262px] left-[451px] flex flex-row justify-center items-center">
          <img src="../assets/svg/watch.svg" alt="svg watch" class="icon-watch">
          <p class="text-white font-subtitle font-medium text-6xl ">{{ hour }}:{{ minutes }}</p>
        </div>
      </div>

      <div class="brand-vector">
        <img src="../assets/carnet.png" alt="">
      </div>

    </section>
  </div>

</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      amount: null,
      close: null,
      active: null,
      date: new Date(),
      hour: this.date.getHours(),
      minutes: this.date.getMinutes(),
    }

  },
  watch: {
    hour(){

    }
  },
  methods: {}
}

</script>

<style scoped>

.info-display {
  width: 730px;
  height: 400px;
  border-radius: 5px;
  mix-blend-mode: normal;
  padding-left: 48px;
  padding-top: 42px;
  @apply bg-royal shadow-md
}

.info-item {
  @apply font-subtitle font-medium text-white mb-[14px]
}

.box-time {
  width: 264px;
  height: 130px;
  border-radius: 5px;
  @apply border-2 bg-transparent border-oran
}

.brand-vector {
  width: 400px;
  height: 400px;
  border-radius: 5px;
  margin-left: 155px;
}

.icon-watch {
  height: 64px;
  width: 64px;
  margin-right: 21px;
}
</style>