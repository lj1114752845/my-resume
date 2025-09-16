import {SkillModel} from "./skill-model.ts";
import {JobIntentionModel} from "./job-intention-model.ts";
import {ProjectInfoModel} from "./project-info-model.ts";
import {WorkExpModel} from "./work-exp-model.ts";
import {EducationModel} from "./education-model.ts";

/**
 * 求职人信息
 */
class ApplicantModel {
    //姓名
    name: string;
    //性别
    sex: string;
    //出生日期
    birth: string;
    //工作时长
    seniority: string;
    //学历
    eduBack: string;
    //户口
    perRes: string;
    //居住地
    address: string;
    //身份 学生/职场
    identity: string;
    //手机号
    phone: string;
    //邮箱
    email: string;
    //学校信息
    educations: EducationModel[];
    //自我评价
    selfEval: string[];
    //技能表
    skills: SkillModel[];
    //求职意向列表
    jobIntentionModels: JobIntentionModel[];
    //项目描述列表
    projectInfoModels: ProjectInfoModel[];
    //工作经历列表
    workExpModels: WorkExpModel[];


    constructor(name: string, sex: string, birth: string, seniority: string, eduBack: string, perRes: string, address: string, identity: string, phone: string, email: string, educations: EducationModel[], selfEval: string[], skills: SkillModel[], jobIntentionModels: JobIntentionModel[], projectInfoModels: ProjectInfoModel[], workExpModels: WorkExpModel[]) {
        this.name = name;
        this.sex = sex;
        this.birth = birth;
        this.seniority = seniority;
        this.eduBack = eduBack;
        this.perRes = perRes;
        this.address = address;
        this.identity = identity;
        this.phone = phone;
        this.email = email;
        this.educations = educations;
        this.selfEval = selfEval;
        this.skills = skills;
        this.jobIntentionModels = jobIntentionModels;
        this.projectInfoModels = projectInfoModels;
        this.workExpModels = workExpModels;
    }

    static async loadApplicantModel(fileName: string): Promise<ApplicantModel> {
        const response = await fetch(`./${fileName}.json`);
        if (!response.ok) {
            throw new Error(`HTTP错误: ${response.status}`);
        }
        let data: any;
        try {
            data = await response.json();
        } catch (err) {
            throw new Error('返回文件格式错误');
        }
        return ApplicantModel.toModel(data);
    }

    static toModel(obj: Record<string, never>): ApplicantModel {
        const educations: EducationModel[] = [];
        const skills: SkillModel[] = [];
        const jobIntentionModels: JobIntentionModel[] = [];
        const projectInfoModels: ProjectInfoModel[] = [];
        const workExpModels: WorkExpModel[] = [];

        if (obj.educations && Array.isArray(obj.educations)) {
            for (const item of obj.educations as Record<string, any>[]) {
                educations.push(EducationModel.toModel(item))
            }
        }

        if (obj.skills && Array.isArray(obj.skills)) {
            for (const item of obj.skills as Record<string, any>[]) {
                skills.push(SkillModel.toModel(item))
            }
        }

        if (obj.jobIntentionModels && Array.isArray(obj.jobIntentionModels)) {
            for (const item of obj.jobIntentionModels as Record<string, any>[]) {
                jobIntentionModels.push(JobIntentionModel.toModel(item))
            }
        }

        if (obj.projectInfoModels && Array.isArray(obj.projectInfoModels)) {
            for (const item of obj.projectInfoModels as Record<string, any>[]) {
                projectInfoModels.push(ProjectInfoModel.toModel(item))
            }
        }

        if (obj.workExpModels && Array.isArray(obj.workExpModels)) {
            for (const item of obj.workExpModels as Record<string, any>[]) {
                workExpModels.push(WorkExpModel.toModel(item))
            }
        }

        return new ApplicantModel(
            obj.name ?? '',
            obj.sex ?? '',
            obj.birth ?? '',
            obj.seniority ?? '',
            obj.eduBack ?? '',
            obj.perRes ?? '',
            obj.address ?? '',
            obj.identity ?? '',
            obj.phone ?? '',
            obj.email ?? '',
            educations,
            obj.selfEval ?? [],
            skills,
            jobIntentionModels,
            projectInfoModels,
            workExpModels,
        );
    };
}

export {
    ApplicantModel
}