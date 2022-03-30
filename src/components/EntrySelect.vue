<template>
  <label :for="fieldName">{{ fieldName }}</label>
  <select :name="fieldName" :id="fieldName">
    <option v-for="option in options" :value="option.id">{{ option.name }}</option>
  </select>
</template>
<script>
export default {
  name: "EntrySelect",
  props: ['fieldName', 'options'],
  data () {
    return
  }
}
</script>

<style scoped>

label {

}

select {
  @apply w-[530px] h-[40px] bg-white font-content
}

</style>