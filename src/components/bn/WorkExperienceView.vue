<!--
 作者：李健
 邮箱：lj2690@163.com
-->
<script setup lang="ts">
import {WorkExpModel} from "../../model/work-exp-model.ts";

withDefaults(defineProps<{
  data: WorkExpModel[],
}>(), {});
</script>

<template>
  <div class="work-experience-view">
    <template v-for="item of data">
      <div class="work-experience-view-item">
        <div>公司：</div>
        <div>{{ item.name }}</div>
        <div></div>
        <div>时间：</div>
        <div>{{ item.startTime }} - {{ item.endTime }}</div>
        <div></div>
        <div>岗位：</div>
        <div>{{ item.job }}</div>
        <div></div>
        <div>工资：</div>
        <div>{{ item.salary }}</div>
        <div></div>
        <div>工作描述：</div>
        <div>{{ item.desc }}</div>
        <div></div>
      </div>
    </template>
  </div>

</template>

<style scoped>
.work-experience-view-item {
  display: grid;
  gap: 5px;
  grid-template-columns: auto auto 1fr;
  font-size: var(--text-size);
  color: var(--text-color);
}

.work-experience-view {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>