<template>
  <div class="flex-col-center wh-full">
    <div class="text-30px mb-10">404 Not Found</div>
    <div class="text-blue-500 cursor-pointer" @click="goBack">返回首页</div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const goBack = () => {
  router.push('/')
}
</script>
