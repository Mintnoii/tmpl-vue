<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo">
        Mint App
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
          <svg-icon name="RiArticleLine" />
          <router-link to="/example">
            示例
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <svg-icon name="RiAccountPinBoxFill" />
          <router-link to="/about">
            关于
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <!-- <a-layout-header class="font-bold text-lg" style="background: #fff; padding: 0">
        自定义头部
      </a-layout-header> -->
      <a-layout-content>
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script setup lang="ts">
const selectedKeys = ref(["1"]);
const collapsed = ref<boolean>(false)

</script>
<style lang="scss">
.logo {
  @apply font-bold h-30px m-10px text-green-300;
}

.ant-menu-item .ant-menu-title-content {
  @apply flex items-center;
}
</style>
