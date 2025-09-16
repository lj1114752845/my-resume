<!--
 作者：李健
 邮箱：lj2690@163.com
-->
<script setup lang="ts">
import {ProjectInfoModel} from "../../model/project-info-model.ts";

withDefaults(defineProps<{
  data: ProjectInfoModel[],
}>(), {});
</script>

<template>
  <div class="project-experience-view">
    <template v-for="item of data">
      <div class="project-experience-view-item">
        <div class="project-tn">
          <p>{{item.startTime}} - {{item.endTime}}</p>
          <p>{{ item.name}} </p>
        </div>
        <div class="project-des">
          <span>项目描述：</span>
          <p>{{ item.description}}</p>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>

.project-des p {
  line-height: calc(var(--text-size) + 12px);
}

.project-des > span {
  white-space: nowrap;
}

.project-tn, .project-des {
  display: flex;
  flex-direction: row;
  gap: 30px;
}

.project-experience-view-item {
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-size: var(--text-size);
  color: var(--text-color);
}

.project-experience-view {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>