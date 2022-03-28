<template>
  <div class="control-form">
    <label :for="fieldName" class="labelField">{{ fieldName }}:</label>
    <input :id="fieldName" type="text" class="inputField" />
  </div>
</template>
<script>
export default {
  name: "InputSmall",
  props: ['fieldName'],
  data() {
    return {}
  }
}
</script>

<style scoped>

.inputField {
  border-radius: 5px;
  @apply w-[250px] h-[40px] bg-white font-content focus:border-2 border-oran
}

.labelField {
  @apply font-content font-normal text-sm text-black mb-[12px]
}
</style>