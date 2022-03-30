<template>
  <div class="form-control-long">
    <label :for="fieldName" class="labelField">{{fieldName}}</label>
    <input type="text" :name="fieldName"  :id="fieldName" class="inputField" />
  </div>
</template>

<script>
export default {
  name: "InputLong",
  props:['fieldName'],
  data() {
    return {}
  }
}
</script>

<style scoped>

input {
  @apply w-[530px] h-[40px] bg-white font-content focus:border-2 border-oran
}

label {
  @apply font-content font-normal text-sm text-black mb-[12px]
}


</style>