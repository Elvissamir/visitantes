<template>
  <div class="dropdown-cell">
    <p>
      <slot></slot>
    </p>
    <img src="../assets/svg/bx-plus.svg" alt="" class="icon-plus">
    <div class="dropdown-body">
     <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
import EntrySmall from "./EntrySmall.vue";

export default {
  name: "DropdownInput",
  components:{
    EntrySmall,
  },
  data() {
    return {

    };
  },
}
</script>

<style scoped>

.dropdown-cell {
  border-radius: 5px 5px 0px 0px;
  @apply relative bg-dirtydark w-[531px] h-[34px] font-content text-sm font-normal flex flex-row
}

.dropdown-body {
  @apply absolute w-[531px] h-[180px] bg-dirtydark flex flex-row flex-wrap px-[10px] my-[15px]
}

.icon-plus {
  @apply w-[24px] h-[24px]
}

</style>