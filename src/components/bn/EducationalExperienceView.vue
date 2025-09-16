<!--
 作者：李健
 邮箱：lj2690@163.com
-->
<script setup lang="ts">

import {EducationModel} from "../../model/education-model.ts";

withDefaults(defineProps<{
  data: EducationModel[],
}>(), {});
</script>

<template>
  <div class="educational-experience-view">
    <template v-for="item of data">
      <div class="educational-experience-view-item">
        <div>{{ item.startTime }} - {{ item.endTime}}</div>
        <div>{{ item.name }}</div>
        <div>{{item.major}}</div>
        <div>{{ item.level}}</div>
        <div></div>
      </div>
    </template>
  </div>
</template>

<style scoped>

.educational-experience-view-item {
  font-size: var(--text-size);
  color: var(--text-color);
  display: grid;
  grid-template-columns: auto auto auto auto 1fr;
  gap: 5px;
}


.educational-experience-view {
  display: flex;
  flex-direction: column;
}
</style>