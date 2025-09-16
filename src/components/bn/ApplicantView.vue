<!--
 作者：李健
 邮箱：lj2690@163.com
-->
<script setup lang="ts">
import type {ApplicantModel} from "../../model/applicant-model.ts";
import {Utils} from "../../utils/utils.ts";

withDefaults(defineProps<{
  data: ApplicantModel
}>(), {});
</script>

<template>
  <div class="applicant-body">
    <div class="name">{{ data.name }}</div>
    <div class="info-body">
      <div class="info">
        <div class="basic-info">
          <span>{{ data.sex }}</span>
          <span>{{ Utils.calculateAge(data.birth) }}岁({{ data.birth }})</span>
          <span>{{ data.seniority }}年工作经验</span>
          <span>{{ data.eduBack }}</span>
        </div>
        <div class="pos-info">
          <span>现居住地：{{data.address}}</span>
          <span>户口：{{data.perRes}}</span>
          <span>{{ data.identity}}</span>
        </div>
        <div class="text">
          手机：{{ data.phone }}
        </div>
        <div class="text">
          邮箱：{{ data.email}}
        </div>
      </div>
      <div class="photo-body">
<!--        <img alt="" :src="photo"/>-->
      </div>
    </div>
  </div>
</template>

<style scoped>
.pos-info {
  display: flex;
  flex-direction: row;
  font-size: var(--text-size);
  color: var(--text-color);
}

.basic-info {
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-size: var(--text-prominent-size);
  font-weight: bold;
  color: var(--text-color);
}

.photo-body > img {
  width: 100px;
  height: 100px;
  border-radius: 4px;
  align-self: flex-end;
}

.photo-body {
  display: flex;
  flex-direction: row;
  margin-left: auto;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.info-body {
  display: flex;
  flex-direction: row;
}

.name {
  font-size: var(--text-max-size);
  font-weight: bold;
  color: var(--text-color);
}

.applicant-body {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>