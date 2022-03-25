<template>
  <div class="control-form">
    <label :for="fieldName" class="labelField">{{fieldName}}</label>
    <input :id="fieldName" type="text" class="inputField">
  </div>


</template>

<script>
export default {
  name: "InputLong",
  props:['fieldName'],
  data(){
    return{

    }
  }
}
</script>

<style scoped>

.inputField {
  @apply w-[250px] h-[40px]
}

labelField {
 @apply
}

</style>