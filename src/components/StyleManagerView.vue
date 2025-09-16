<!--
 作者：李健
 邮箱：lj2690@163.com
-->
<script setup lang="ts">
import {Moon, Sunny} from "@element-plus/icons-vue";
import {ref} from "vue";
import github from "../assets/ODF.svg";

const state = ref(0);

function skinSwitch() {
  if (state.value === 0) {
    document.documentElement.setAttribute('data-theme', 'dark');
    state.value = 1;
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    state.value = 0;
  }
}

function openGithub() {
  window.open('https://github.com/lj1114752845/my-resume');
}
</script>

<template>
  <div class="style-manager-view">
    <img :src="github" alt="" width="20px" height="20px" @click="openGithub"/>
    <div class="skin-box" @click="skinSwitch">
      <i>
        <Moon v-if="state === 0"></Moon>
        <Sunny v-else></Sunny>
      </i>
    </div>
  </div>
</template>

<style scoped>

.skin-box {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.style-manager-view {
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  gap: 25px;
  border-bottom: var(--title-bg-clor) solid 1px;
  padding: 5px 15px 5px 5px;
  color: var(--text-color);
}
</style>