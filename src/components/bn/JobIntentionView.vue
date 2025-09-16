<!--
 作者：李健
 邮箱：lj2690@163.com
-->
<script setup lang="ts">
import type {JobIntentionModel} from "../../model/job-intention-model.ts";

withDefaults(defineProps<{
  data: JobIntentionModel[]
}>(), {});
</script>

<template>
  <div class="job-intention-view">
    <template v-for="item of data">
      <div class="job-intention-view-item">
        <div>期望工作地区：</div>
        <div>{{ item.workArea }}</div>
        <div>期望月薪：</div>
        <div>{{ item.monthlyPay }}</div>
        <div>期望工作性质：</div>
        <div>{{ item.natureWork }}</div>
        <div>期望从事职业：</div>
        <div>{{ item.job }}</div>
        <div>期望从事行业：</div>
        <div>{{ item.industry }}</div>
      </div>
    </template>
  </div>
</template>

<style scoped>

.job-intention-view {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.job-intention-view-item {
  display: grid;
  gap: 5px;
  grid-template-columns: auto 1fr;
  font-size: var(--text-size);
  color: var(--text-color);
}
</style>