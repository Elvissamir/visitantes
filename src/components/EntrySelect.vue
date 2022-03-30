<template>
  <div class="select-control">
    <label :for="name">{{ name }}</label>
    <select :name="name" :id="name">
      <option v-for="option in options" :value="option.id">{{ option.name }}</option>
    </select>
  </div>

</template>
<script>
export default {
  name: "EntrySelect",
  props: ['name', 'options'],
  data() {
    return {}
  }
}
</script>

<style scoped>

label {
  @apply font-content font-normal text-sm text-black mb-[12px] block
}

select {
  @apply w-[530px] h-[40px] bg-white font-content
}

option {
 @apply font-content text-sm font-bold
}

</style>