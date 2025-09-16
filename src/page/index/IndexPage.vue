<!--
  作者：李健
  邮箱：lj2690@163.com
-->
<script setup lang="ts">
import ApplicantView from "../../components/bn/ApplicantView.vue";
import ItemTitleView from "../../components/bn/ItemTitleView.vue";
import JobIntentionView from "../../components/bn/JobIntentionView.vue";
import SelfEvaluationView from "../../components/bn/SelfEvaluationView.vue";
import WorkExperienceView from "../../components/bn/WorkExperienceView.vue";
import ProjectExperienceView from "../../components/bn/ProjectExperienceView.vue";
import EducationalExperienceView from "../../components/bn/EducationalExperienceView.vue";
import ProfessionalSkillsView from "../../components/bn/ProfessionalSkillsView.vue";
import {ApplicantViewModel} from "../../viewmodel/applicant-view-model.ts";
import {onMounted} from "vue";
import StyleManagerView from "../../components/StyleManagerView.vue";
import {Utils} from "../../utils/utils.ts";

const params = Utils.getUrlParamsUsingAPI();

// 创建ViewModel实例
const vm = new ApplicantViewModel();


// 组件挂载后加载数据
onMounted(async () => {
  await vm.loadInfo(params.f ? params.f : undefined);
  if (vm.data.info) {
    document.title = `${vm.data.info.name}的简历`;
  }
});
</script>

<template>
  <!-- 检查加载状态和错误信息 -->
  <template v-if="vm.data.isLoading">
    <div>加载中...</div>
  </template>

  <template v-else-if="vm.data.error">
    <div class="error-message">
      获取简历信息失败: {{ vm.data.error }}
    </div>
  </template>

  <!-- 数据加载成功且存在时显示 -->
  <template v-else-if="vm.data.info">
    <div class="index-container">
      <StyleManagerView></StyleManagerView>
      <div class="index-box">
        <ApplicantView :data="vm.data.info"></ApplicantView>
        <ItemTitleView title-name="求职意向"></ItemTitleView>
        <JobIntentionView :data="vm.data.info.jobIntentionModels"></JobIntentionView>
        <ItemTitleView title-name="自我评价"></ItemTitleView>
        <SelfEvaluationView :data="vm.data.info.selfEval"></SelfEvaluationView>
        <ItemTitleView title-name="工作经历"></ItemTitleView>
        <WorkExperienceView :data="vm.data.info.workExpModels"></WorkExperienceView>
        <ItemTitleView title-name="项目经历"></ItemTitleView>
        <ProjectExperienceView :data="vm.data.info.projectInfoModels"></ProjectExperienceView>
        <ItemTitleView title-name="教育经历"></ItemTitleView>
        <EducationalExperienceView :data="vm.data.info.educations"></EducationalExperienceView>
        <ItemTitleView title-name="专业技能"></ItemTitleView>
        <ProfessionalSkillsView :data="vm.data.info.skills"></ProfessionalSkillsView>
      </div>
    </div>
  </template>

  <!-- 其他情况 -->
  <template v-else>
    <div>暂无简历信息</div>
  </template>
</template>

<style scoped>
.index-box {
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
}

.index-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.error-message {
  color: #f56c6c;
  padding: 20px;
  text-align: center;
}
</style>
