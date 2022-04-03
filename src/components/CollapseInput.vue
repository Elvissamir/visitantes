<template>
  <div class="collapse-form">
    <button @click="setActiveCollapse" class="collapse-item">
      {{ title }}
      <img
          src="../assets/svg/bx-plus.svg"
          alt="icon-dropdown"
          class="icon-plus"
      />
    </button>
    <div :class="isCollapseActive ?'collapse-body':'hidden'">
      <entry-small v-for="field in fields" :name="field" :key="field"></entry-small>
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
      this.isDropdownActive = true;
    }
  }
}
</script>

<style scoped>

.collapse-form {
  @apply  relative w-[531px] h-[34px]
}
.collapse-item {
  border-radius: 5px 5px 0px 0px;
  @apply  bg-dirtydark w-[531px] h-[34px] font-content text-sm font-normal
}

.collapse-body {
  @apply absolute w-[531px] h-[180px] bg-dirtydark flex flex-row flex-wrap px-[10px] my-[15px]
}

.icon-plus {
}

</style>