<!--
 作者：李健
 邮箱：lj2690@163.com
-->
<script setup lang="ts">

import type {SkillModel} from "../../model/skill-model.ts";

withDefaults(defineProps<{
  data: SkillModel[],
}>(), {});


function formatTime(num: number): string {
  if (num < 12) {
    return `${num}个月`
  }
  return `${Math.round(num / 12)}年`;
}
</script>

<template>
  <div class="professional-skills-view">
    <template v-for="item of data">
      <div>{{ item.name }}</div>
      <div>{{ item.level }}</div>
      <div>{{ formatTime(item.often) }}</div>
      <div></div>
    </template>
  </div>
</template>

<style scoped>

.professional-skills-view {
  display: grid;
  grid-template-columns: auto auto auto 1fr;
  font-size: 14px;
  color: var(--text-color);
  gap: 15px;
}
</style>