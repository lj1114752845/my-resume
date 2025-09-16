<!--
 作者：李健
 邮箱：lj2690@163.com
-->
<script setup lang="ts">
withDefaults(defineProps<{
  data: string[],
}>(), {});
</script>

<template>
  <div class="self-evaluation-view">
    <template v-for="(item, index) in data">
      <p>{{ index + 1 }},{{ item }}</p>
    </template>
  </div>
</template>

<style scoped>
.self-evaluation-view {
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-size: var(--text-size);
  color: var(--text-color);
}
</style>