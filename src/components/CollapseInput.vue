<template>
  <div class="collapse-form">
    <div @click="setActiveCollapse" class="collapse-item">
      <h1 class=" ml-[14px] w-[65px]">{{ title }}</h1>
      <img
          src="../assets/svg/bx-plus.svg"
          alt="icon-dropdown"
          class="icon-plus"
      />
    </div>
    <div :class="isCollapseActive ?'collapse-body':'hidden'">
      <entry-small v-for="field in fields" :name="field" :key="field" ></entry-small>
    </div>
  </div>
</template>

<script>
import EntrySmall from "./EntrySmall.vue";

export default {
  name: "DropdownInput",
  props: ['fields', 'title'],
  components: {EntrySmall},
  data() {
    return {
      isCollapseActive: false,
    };
  },
  methods: {
    setActiveCollapse() {
      this.isCollapseActive = !this.isCollapseActive;
    }
  }
}
</script>

<style scoped>

.collapse-form {
  @apply relative w-[531px] h-[34px]
}

.collapse-item {
  border-radius: 5px 5px 0px 0px;
  @apply bg-dirtydark w-[531px] h-[34px] font-content text-sm font-normal flex flex-row   items-center
}

.collapse-body {
  @apply absolute w-[531px] h-[180px] bg-dirtydark flex flex-row flex-wrap gap-x-2 px-[10px] my-[15px] top-[34px]
}

.icon-plus {

  @apply  w-[24px] h-[24px] ml-[427px]
}

</style>