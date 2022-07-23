<template>
  <div class="container">
    <h1 class="myclass">
      {{ title }}
    </h1>
  </div>
</template>

<script setup lang="ts" name="HomePage">
const title = ref("Vue 项目默认模板");
</script>

<style lang="scss" scoped>
.myclass {
  @apply pt-40px;
}
</style>
