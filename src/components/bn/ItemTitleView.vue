<!--
 作者：李健
 邮箱：lj2690@163.com
-->
<script setup lang="ts">
withDefaults(defineProps<{
  titleName: string
}>(), {
  titleName: ''
});
</script>

<template>
  <div class="item-title">
    <div class="title">
      <span>{{ titleName }}</span>
    </div>
    <div class="fill">

    </div>
  </div>
</template>

<style scoped>
.fill {
  flex: 1 0 0;
  background-color: var(--title-bg-clor);
}

.title > span {
  padding: 0 3px 0 3px;
}

.title {
  text-align: center;
  padding: 5px;
  background-color: var(--title-bg-clor);
  font-size: var(--text-item-title-size);
  font-weight: bold;
  color: var(--text-color);
}

.item-title {
  display: flex;
  gap: 10px;
}
</style>