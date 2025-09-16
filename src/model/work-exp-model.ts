/**
 * 工作经验/经历
 */
class WorkExpModel {
    //加入时间
    startTime: string;
    //离职时间
    endTime: string;
    //公司名
    name: string;
    //岗位
    job: string;
    //薪资
    salary: string;
    //描述
    desc: string;


    constructor(startTime: string, endTime: string, name: string, job: string, salary: string, desc: string) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.name = name;
        this.job = job;
        this.salary = salary;
        this.desc = desc;
    }

    static toModel(obj: Record<string, string>): WorkExpModel {
        return new WorkExpModel(
            obj.startTime ?? '',
            obj.endTime ?? '',
            obj.name ?? '',
            obj.job ?? '',
            obj.salary ?? '',
            obj.desc ?? ''
        );
    }
}

export {
    WorkExpModel
}