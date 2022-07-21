<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo">
        Xmov
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
          <svg-icon name="RiArticleLine" />
          <router-link to="/example">
            示例
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <svg-icon name="RiAccountPinBoxFill" color="#ff4d4f" />
          <router-link to="/about">
            关于
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="text-lg font-bold" style="background: #fff; padding: 0">
        自定义头部
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
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
.ant-layout-sider-children .logo {
    height: 32px;
    margin: 10px;
    font-size: 22px;
    font-weight: bold;
    color: aquamarine;
    background: rgba(255, 255, 255, 0.1);
}

.site-layout .site-layout-background {
    background: #fff;
}

.ant-menu-item .ant-menu-title-content {
    display: flex;
    align-items: center;
}
[data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
}
</style>
