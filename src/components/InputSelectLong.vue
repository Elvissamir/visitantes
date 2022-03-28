<template>
  <label :for="fieldName">{{ fieldName }}</label>
  <select :name="fieldName" :id="fieldName">
    <option v-for="option in options" :value="option.id">{{ option.name }}</option>
  </select>
</template>
<script>
export default {
  name: "InputSelectLong",
  props: ['fieldName', 'options']
}
</script>

<style scoped>

label {

}

select {
  @apply w-[530px] h-[40px] bg-white font-content focus:border-2 border-oran
}

</style>