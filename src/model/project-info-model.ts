/**
 * 项目描述
 */
class ProjectInfoModel {
    name: string;
    //开始
    startTime: string;
    //结束
    endTime: string;
    //岗位
    job: string;
    //工作描述
    description: string;
    //项目地址
    projectLink: string;


    constructor(name: string, startTime: string, endTime: string, job: string, description: string, projectLink: string) {
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
        this.job = job;
        this.description = description;
        this.projectLink = projectLink;
    }

    // 将 JSON 对象转换为模型实例
    static toModel(obj: Record<string, string>): ProjectInfoModel {
        return new ProjectInfoModel(
            obj.name ?? '',
            obj.startTime ?? '',
            obj.endTime ?? '',
            obj.job ?? '',
            obj.description ?? '',
            obj.projectLink ?? ''
        );
    }
}

export {
    ProjectInfoModel
}