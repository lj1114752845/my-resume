/**
 * 求职意向
 */
class JobIntentionModel {
    //工作地
    workArea:string;
    //月薪
    monthlyPay:string;
    //工作性质
    natureWork:string;
    //岗位
    job:string;
    //期望行业
    industry:string;


    constructor(workArea: string, monthlyPay: string, natureWork: string, job: string, industry: string) {
        this.workArea = workArea;
        this.monthlyPay = monthlyPay;
        this.natureWork = natureWork;
        this.job = job;
        this.industry = industry;
    }

    static toModel(obj: Record<string, string>): JobIntentionModel {
        return new JobIntentionModel(
            obj.workArea ?? '',
            obj.monthlyPay ?? '',
            obj.natureWork ?? '',
            obj.job ?? '',
            obj.industry ?? ''
        );
    }
}

export {
    JobIntentionModel
}