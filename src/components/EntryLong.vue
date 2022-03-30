<template>
  <div class="form-control-long">
    <label :for="name" class="labelField">{{name}}</label>
    <input type="text" :name="name"  :id="name" class="inputField" />
  </div>
</template>

<script>
export default {
  name: "InputLong",
  props:['name'],
  data() {
    return {}
  }
}
</script>

<style scoped>

input {
  border-radius: 5px;
  @apply w-[530px] h-[40px] bg-white font-content focus:border-2 border-oran outline-none
}

label {
  @apply font-content font-normal text-sm text-black mb-[12px] block
}


</style>