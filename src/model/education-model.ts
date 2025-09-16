/*
* 作者：李健
* 邮箱：lj2690@163.com
* */
class EducationModel {
    name: string;
    level: string;
    major: string;
    startTime: string;
    endTime: string;


    constructor(name: string, level: string, major: string, startTime: string, endTime: string) {
        this.name = name;
        this.level = level;
        this.major = major;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    static toModel(obj: Record<string, any>) {
        return new EducationModel(
            obj.name ?? '',
            obj.level ?? '',
            obj.major ?? '',
            obj.startTime ?? '',
            obj.endTime ?? '',
        );
    }
}

export {
    EducationModel
}