<template>
  <div class="form-control-long">
    <label for="fieldName" class="labelField">{{fieldName}}</label>
    <input type="text" :name="fieldName" class="inputField">
  </div>
</template>

<script>
export default {
  name: "InputLong",
  props:['fieldName'],
  data() {

  }
}
</script>

<style scoped>

.inputField {
  @apply w-[530px] h-[40px] bg-white font-content focus:border-2 border-oran
}

.labelField {
  @apply font-content font-normal text-sm text-black mb-[12px]
}


</style>