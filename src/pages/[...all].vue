<script setup lang="ts" name="404">
const router = useRouter();
const goBack = () => {
  router.push('/');
};
</script>

<template>
  <a-row>
    <a-col span="24">
      <a-result
        status="404"
        title="页面未找到"
        sub-title="请检查路径后重试或返回首页"
      >
        <template #extra>
          <a-button
            type="primary"
            @click="goBack"
          >
            返回首页
          </a-button>
        </template>
      </a-result>
    </a-col>
  </a-row>
</template>
<route lang="yaml">
meta:
  layout: BlankLayout
</route>
