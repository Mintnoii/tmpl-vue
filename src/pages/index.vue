<template>
  <div class="container">
    <h1 class="myclass">
      {{ title }}
    </h1>
  </div>
</template>

<script setup lang="ts" name="HomePage">
import { useUserStore } from '@/store/user';
const title = ref("Vue 项目默认模板");
// const userStore = useUserStore();
// userStore.setUserInfo({
//    id: '1',
//   token: 'aaa',
//   name: "张三",
// });
// userStore.getUserInfo();
</script>

<style lang="scss" scoped>
.myclass {
  color: $theme-color;
}
</style>
