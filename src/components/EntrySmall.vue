<template>
  <div class="control-form">
    <label :for="name" >{{ name }}:</label>
    <input :id="name" type="text" value="" />
  </div>
</template>
<script>
export default {
  name: "EntrySmall",
  props: ['name'],
  data(){
    return {


    }
  }
}
</script>

<style scoped>

input {
  border-radius: 5px;
  @apply w-[250px] h-[40px] bg-white font-content focus:border-2 border-oran
}

label {
  @apply font-content font-normal text-sm text-black mb-[12px] block
}
</style>